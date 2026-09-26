<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{ skill: string }>()
const originalHref = computed(() => withBase(`/source/skills/${props.skill}/SKILL.html`))
const html = ref('')
const loading = ref(false)

async function loadOriginal() {
  if (html.value || loading.value) return
  loading.value = true
  try {
    const response = await fetch(originalHref.value)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const sourceDocument = new DOMParser().parseFromString(await response.text(), 'text/html')
    const sourceContent = sourceDocument.querySelector<HTMLElement>('.source-doc')
    if (!sourceContent) throw new Error('English source content is missing')
    const documentFragment = document.createElement('div')
    documentFragment.innerHTML = sourceContent.innerHTML
    for (const link of documentFragment.querySelectorAll<HTMLAnchorElement>('a[href]')) {
      const href = link.getAttribute('href')
      if (!href || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) continue
      const target = new URL(href, `${window.location.origin}${originalHref.value}`)
      target.pathname = target.pathname.replace(/\.md$/, '.html')
      link.href = `${target.pathname}${target.search}${target.hash}`
    }
    html.value = documentFragment.innerHTML
  } catch {
    html.value = '<p>无法加载英文原文，请使用上方的独立原文链接。</p>'
  } finally {
    loading.value = false
  }
}

function onToggle(event: Event) {
  if ((event.currentTarget as HTMLDetailsElement).open) void loadOriginal()
}
</script>

<template>
  <div class="english-source-wrap">
    <details class="english-source" @toggle="onToggle">
      <summary>展开英文原文 · Read the English source</summary>
      <p class="source-open-link">
        <a :href="originalHref">单独打开英文原文页</a>
      </p>
      <p v-if="loading" role="status">正在加载英文原文…</p>
      <div v-else-if="html" class="source-markdown vp-doc" v-html="html" />
    </details>
  </div>
</template>
