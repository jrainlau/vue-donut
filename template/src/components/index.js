import Title from './title'
import Content from './content'
import Link from './link'

const install = (Vue) => {
  Vue.component('my-title', Title)
  Vue.component('my-content', Content)
  Vue.component('my-link', Link)
}

export default install
