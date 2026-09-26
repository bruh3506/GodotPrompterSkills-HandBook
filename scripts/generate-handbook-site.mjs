#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'handbook/content');
const SITE = path.join(ROOT, 'handbook/site');
const GENERATED = path.join(SITE, '.vitepress/generated');
const ZH_PAGES = path.join(SITE, 'zh/skills');
const HASH_FILE = path.join(CONTENT, 'zh/source-hashes.json');
const refreshHashes = process.argv.includes('--refresh-source-hashes');
const checkOnly = process.argv.includes('--check-only');

const index = JSON.parse(await readFile(path.join(ROOT, 'skills/index.json'), 'utf8'));
const categories = JSON.parse(await readFile(path.join(CONTENT, 'categories.json'), 'utf8'));
const summaries = JSON.parse(await readFile(path.join(CONTENT, 'zh/reference-summaries.json'), 'utf8'));
const markdown = new MarkdownIt({ html: true, linkify: true }).use(markdownItAnchor);

function stripFrontmatter(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
}

function getHeading(content, fallback) {
  return content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback;
}

function sourcePageUrl(sourceMarkdownPath, markdownPath) {
  const resolvedSource = path.posix.normalize(path.posix.join(path.posix.dirname(sourceMarkdownPath), markdownPath || path.posix.basename(sourceMarkdownPath)));
  if (!resolvedSource.startsWith('skills/')) return null;
  if (!resolvedSource.endsWith('.md')) return null;
  const currentPage = `source/${sourceMarkdownPath.replace(/\.md$/, '.html')}`;
  const targetPage = `source/${resolvedSource.replace(/\.md$/, '.html')}`;
  return path.posix.relative(path.posix.dirname(currentPage), targetPage) || path.posix.basename(targetPage);
}

function rewriteEmbeddedSourceLinks(html, sourceMarkdownPath) {
  return html.replace(/href="([^"]+)"/g, (match, href) => {
    if (href.startsWith('#')) {
      return `href="${sourcePageUrl(sourceMarkdownPath, '')}${href}"`;
    }
    if (/^(?:[a-z]+:|\/\/|\/)/i.test(href)) return match;

    const [filePath, ...fragmentParts] = href.split('#');
    let decodedPath = filePath;
    try {
      decodedPath = decodeURIComponent(filePath);
    } catch {
      return match;
    }
    const route = sourcePageUrl(sourceMarkdownPath, decodedPath);
    if (!route) return match;
    const fragment = fragmentParts.length > 0 ? `#${fragmentParts.join('#')}` : '';
    return `href="${route}${fragment}"`;
  });
}

function validateCatalog() {
  const known = new Set(index.skills.map((skill) => skill.name));
  const categorized = categories.flatMap((category) => category.skills);
  const duplicates = categorized.filter((name, position) => categorized.indexOf(name) !== position);
  const missing = [...known].filter((name) => !categorized.includes(name));
  const unknown = categorized.filter((name) => !known.has(name));

  if (duplicates.length || missing.length || unknown.length) {
    throw new Error(`Category catalog mismatch. Duplicates: ${duplicates.join(', ') || 'none'}; missing: ${missing.join(', ') || 'none'}; unknown: ${unknown.join(', ') || 'none'}`);
  }

  const knownReferences = new Set(index.skills.flatMap((skill) => skill.references ?? []));
  const unknownSummaries = Object.keys(summaries).filter((reference) => !knownReferences.has(reference));
  if (unknownSummaries.length) throw new Error(`Reference summaries point to unknown files: ${unknownSummaries.join(', ')}`);
}

async function loadGuides() {
  const entries = new Map();
  const missing = [];
  for (const skill of index.skills) {
    const file = path.join(CONTENT, 'zh/skills', `${skill.name}.md`);
    try {
      const content = await readFile(file, 'utf8');
      const guide = content.trim();
      const requiredSections = ['## 通俗解释', '## 场景例子', '## 专业要点', '## 什么时候用', '## English learning'];
      const missingSections = requiredSections.filter((heading) => !guide.includes(heading));
      if (!guide.startsWith('# ') || missingSections.length) {
        throw new Error(`Incomplete Chinese guide for ${skill.name}: ${missingSections.join(', ') || 'missing title'}`);
      }
      entries.set(skill.name, { content: guide });
    } catch {
      missing.push(skill.name);
    }
  }
  if (missing.length) throw new Error(`Missing Chinese learning guides (${missing.length}): ${missing.join(', ')}`);
  return entries;
}

async function readSourceHashes() {
  try {
    return JSON.parse(await readFile(HASH_FILE, 'utf8'));
  } catch {
    if (!refreshHashes) {
      throw new Error('Source hashes are missing. After reviewing the guides, run npm run handbook:refresh-source-hashes.');
    }
    return {};
  }
}

async function currentSourceHashes() {
  const hashes = {};
  for (const skill of index.skills) {
    const digest = createHash('sha256');
    const sourceFiles = [skill.source, ...(skill.references ?? [])].sort();
    for (const sourceFile of sourceFiles) {
      digest.update(sourceFile);
      digest.update('\0');
      digest.update(await readFile(path.join(ROOT, sourceFile)));
      digest.update('\0');
    }
    hashes[skill.name] = digest.digest('hex');
  }
  return hashes;
}

function referenceTitle(sourcePath) {
  return readFile(path.join(ROOT, sourcePath), 'utf8').then((content) => getHeading(content, path.basename(sourcePath, '.md')));
}

async function createSkillIndex(guides) {
  const lines = [
    '# 技能目录',
    '',
    '按主题浏览技能，或使用页面顶部的搜索框查找概念、节点、系统和英文术语。每篇中文说明都可以展开对应的英文技能原文。',
    '',
  ];

  for (const category of categories) {
    lines.push(`## ${category.title}`, '');
    for (const skillName of category.skills) {
      const guide = guides.get(skillName).content;
      const title = getHeading(guide, skillName);
      const description = guide.split(/\r?\n/).find((line) => line.trim() && !line.startsWith('#'))?.trim();
      lines.push(`- [${title}](/zh/skills/${skillName})${description ? ` — ${description}` : ''}`);
    }
    lines.push('');
  }

  await writeFile(path.join(ZH_PAGES, 'index.md'), `${lines.join('\n')}\n`);
}

async function createSkillPages(guides) {
  for (const skill of index.skills) {
    const guide = guides.get(skill.name).content;
    const referenceLinks = [];

    for (const reference of skill.references ?? []) {
      const title = await referenceTitle(reference);
      const summary = summaries[reference];
      const fileName = path.basename(reference);
      const href = `/source/skills/${skill.name}/references/${fileName.replace(/\.md$/, '.html')}`;
      referenceLinks.push(`- [${title}](${href})${summary ? `：${summary}` : ''}`);
    }

    const referencesSection = skill.references?.length
      ? `\n\n## 深入参考资料\n\n以下资料保留英文原文；已有中文导读的条目会直接显示摘要。\n\n${referenceLinks.join('\n')}`
      : '\n\n## 深入参考资料\n\n这个技能目前没有单独的参考资料页。';
    const originalSection = `\n\n## 英文原文\n\n<EnglishSource skill="${skill.name}" />\n`;
    const withStatus = guide.replace(/^(# .+)(\r?\n)/, `$1$2\n<SourceFreshness skill="${skill.name}" />\n`);
    await writeFile(path.join(ZH_PAGES, `${skill.name}.md`), `${withStatus}${referencesSection}${originalSection}`);
  }

}

async function mirrorEnglishSources() {
  await rm(path.join(SITE, 'source'), { recursive: true, force: true });
  await rm(path.join(SITE, 'public/source'), { recursive: true, force: true });
  await rm(path.join(SITE, 'public/english-originals'), { recursive: true, force: true });
  await mkdir(path.join(SITE, 'public/source'), { recursive: true });

  for (const skill of index.skills) {
    const skillSources = [skill.source, ...(skill.references ?? [])];
    for (const sourcePath of skillSources) {
      const rawSource = await readFile(path.join(ROOT, sourcePath), 'utf8');
      const body = markdown.render(stripFrontmatter(rawSource));
      const rendered = rewriteEmbeddedSourceLinks(body, sourcePath).replace(/>\s+</g, '><');
      const sourceTitle = getHeading(stripFrontmatter(rawSource), path.basename(sourcePath, '.md'));
      const pagePath = `source/${sourcePath.replace(/\.md$/, '.html')}`;
      const returnLink = path.posix.relative(path.posix.dirname(pagePath), 'index.html');
      const escapeHtml = (value) => value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
      const standalone = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${escapeHtml(sourceTitle)} · Godot Skills Handbook</title>\n<style>body{margin:0;background:#f7f8fa;color:#252a31;font:16px/1.7 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.source-doc{max-width:920px;margin:2rem auto;padding:2rem;background:white;border:1px solid #dfe3e8;border-radius:12px}.source-doc h1,.source-doc h2,.source-doc h3{line-height:1.3;margin-top:1.8em}.source-doc pre{overflow:auto;background:#f3f4f6;padding:1rem;border-radius:8px}.source-doc code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.9em}.source-doc table{display:block;overflow-x:auto;border-collapse:collapse}.source-doc th,.source-doc td{border:1px solid #dfe3e8;padding:.45rem .7rem}.source-doc blockquote{border-left:3px solid #2878c7;padding-left:1rem;color:#525b66}.source-doc img{max-width:100%}.back-link{display:block;max-width:920px;margin:1rem auto;padding:0 2rem;color:#2878c7}@media(max-width:700px){.source-doc{margin:0;padding:1.2rem;border:0;border-radius:0}.back-link{padding:0 1.2rem}}</style>\n</head>\n<body><main class="source-doc">${rendered}</main><a class="back-link" href="${returnLink}">← Return to the Godot skills handbook</a></body>\n</html>\n`;
      const target = path.join(SITE, 'public', pagePath);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, standalone);

    }
  }
}

async function createGeneratedMetadata(guides, baselineHashes, liveHashes) {
  const staleSkills = index.skills
    .filter((skill) => !baselineHashes[skill.name] || baselineHashes[skill.name] !== liveHashes[skill.name])
    .map((skill) => skill.name);
  const sidebar = {
    categories: categories.map((category) => ({
      title: category.title,
      skills: category.skills.map((name) => ({
        name,
        title: getHeading(guides.get(name).content, name),
      })),
    })),
  };

  await mkdir(GENERATED, { recursive: true });
  await writeFile(path.join(GENERATED, 'stale-skills.json'), `${JSON.stringify(staleSkills)}\n`);
  await writeFile(path.join(GENERATED, 'sidebar.json'), `${JSON.stringify(sidebar, null, 2)}\n`);
  return staleSkills;
}

validateCatalog();
const guides = await loadGuides();
const liveHashes = await currentSourceHashes();
let baselineHashes = await readSourceHashes();

if (refreshHashes) {
  baselineHashes = liveHashes;
  await mkdir(path.dirname(HASH_FILE), { recursive: true });
  await writeFile(HASH_FILE, `${JSON.stringify(baselineHashes, null, 2)}\n`);
}

const staleSkills = index.skills.filter((skill) => !baselineHashes[skill.name] || baselineHashes[skill.name] !== liveHashes[skill.name]);

if (checkOnly) {
  console.log(`Handbook content check passed: ${guides.size}/${index.skills.length} skill guides; ${Object.keys(summaries).length} reference summaries.`);
  if (staleSkills.length) console.warn(`English source changed; review these guides: ${staleSkills.map((skill) => skill.name).join(', ')}`);
  process.exit(0);
}

await rm(ZH_PAGES, { recursive: true, force: true });
await mkdir(ZH_PAGES, { recursive: true });
await createSkillIndex(guides);
await createSkillPages(guides);
await mirrorEnglishSources();
const stale = await createGeneratedMetadata(guides, baselineHashes, liveHashes);
console.log(`Generated VitePress pages for ${guides.size} skills and ${index.skills.reduce((count, skill) => count + (skill.references?.length ?? 0), 0)} English reference docs.`);
if (stale.length) console.warn(`Chinese learning guides to review: ${stale.join(', ')}`);
