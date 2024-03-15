// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
// 1. 导入Vue核心包
import Vue from 'vue'
// 2. 导入App.vue根组件
import App from './App.vue'
// 编写导入的代码，往代码的顶部编写(规范)
import HmButton from './components/HmButton.vue'
Vue.config.productionTip = false

// 进行全局注册 -> 在所有的组件范围内都能直接使用
// Vue.component(组件名，组件对象)
Vue.component('HmButton', HmButton)

// 提示：当前处于什么环境（生产环境 / 开发环境）
console.log(123);

// 3. Vue实例化，提供render方法 -> 基于App.vue创建结构渲染index.html
new Vue({
  // el: '#app', 作用和$mount('选择器')作用一致，用于指定Vue所管理容器
  // render: h => h(App),
  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }
}).$mount('#app')
