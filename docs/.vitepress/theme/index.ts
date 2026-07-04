import DefaultTheme from 'vitepress/theme'
import CssDemo from './components/CssDemo.vue'
import FeatureLinks from './components/FeatureLinks.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CssDemo', CssDemo)
    app.component('FeatureLinks', FeatureLinks)
  }
}
