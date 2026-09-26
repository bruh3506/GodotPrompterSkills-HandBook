import { defineConfig } from 'vitepress'
import handbook from './generated/sidebar.json'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITEPRESS_BASE || `/${repositoryName || 'GodotPrompterSkills-HandBook'}/`

export default defineConfig({
  lang: 'zh-CN',
  title: 'Godot 技能学习手册',
  description: '中文讲解 GodotPrompter 技能，并用英文原文辅助学习。',
  base,
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技能目录', link: '/zh/skills/' },
    ],
    sidebar: {
      '/zh/skills/': handbook.categories.map((category) => ({
        text: category.title,
        collapsed: true,
        items: category.skills.map((skill) => ({
          text: skill.title,
          link: `/zh/skills/${skill.name}`,
        })),
      })),
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详细结果',
            resetButtonTitle: '清空搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车键',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上箭头',
              navigateDownKeyAriaLabel: '向下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: '退出键',
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: '本页内容',
    },
    sidebarMenuLabel: '技能目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换浅色模式',
    darkModeSwitchTitle: '切换深色模式',
    skipToContentLabel: '跳到正文',
    lastUpdatedText: '最近更新',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bruh3506/GodotPrompterSkills-HandBook' },
    ],
    footer: {
      message: '供个人学习使用；Godot 技术内容以链接的英文技能原文为准。',
      copyright: 'Built with VitePress and GitHub Pages.',
    },
  },
})
