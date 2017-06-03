import MyHeader from './my-header'
import MyContent from './my-content'
import MyFooter from './my-footer'

const install = (Vue) => {
  Vue.component('my-header', MyHeader)
  Vue.component('my-content', MyContent)
  Vue.component('my-footer', MyFooter)
}

export default install
