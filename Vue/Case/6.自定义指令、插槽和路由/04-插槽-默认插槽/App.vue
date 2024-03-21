<template>
  <div>
    <!-- 2. 在使用组件时，组件标签内填入内容 -->
    <MyDialog>
      你确认要删除吗？
    </MyDialog>
    <MyDialog>
      你确认要退出么
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>