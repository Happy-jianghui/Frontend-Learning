// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
// 1. 导入Vue核心包
import Vue from 'vue'
// 2. 导入App.vue根组件
import App from './App.vue'

Vue.config.productionTip = false

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
