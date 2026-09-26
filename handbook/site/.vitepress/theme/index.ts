import DefaultTheme from 'vitepress/theme'
import EnglishSource from './components/EnglishSource.vue'
import SourceFreshness from './components/SourceFreshness.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('EnglishSource', EnglishSource)
    app.component('SourceFreshness', SourceFreshness)
  },
}
