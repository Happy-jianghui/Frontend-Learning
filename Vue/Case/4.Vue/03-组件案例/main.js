import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

import BaseGoodItem from './components/BaseGoodsItem.vue'
import BaseHotBrand from './components/BaseHotBrand.vue'
import BaseTopic from './components/BaseTopic.vue'
Vue.component('BaseGoodItem', BaseGoodItem)
Vue.component('BaseHotBrand', BaseHotBrand)
Vue.component('BaseTopic', BaseTopic)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
