<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <!-- 2. 父组件，对消息进行监听 -->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue"
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      myTitle: 'Hello, Vue'
    }
  },
  methods: {
    // 3. 提供处理函数，提供逻辑
    handleChange(newTitle) {
      // console.log(newTitle)
      this.myTitle = newTitle
    }
  }
}
</script>

<style>
</style>