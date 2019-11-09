import EdgeCheckbox from './components/EdgeCheckbox.vue'

const install = (Vue) => {
  Vue.component(EdgeCheckbox.name, EdgeCheckbox)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  EdgeCheckbox
}

export default install
