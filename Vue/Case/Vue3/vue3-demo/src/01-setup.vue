<!-- <script>
export default {
  // setup
  // 1. 执行时机，比beforeCreate还要早
  // 2. setup函数中，获取不到this（this是undefined）
  // 3. 数据 和 函数，需要在 setup 最后 return，才能模版中应用
  // 4. 通过 setup 语法糖简化代码
  setup () {
    // console.log('setup函数', this)
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate函数', this)
  }
}
</script> -->

<script setup>
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>