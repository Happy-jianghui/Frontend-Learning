<template>
  <div>
    <MyDialog>
      <template #header>
        <div>我是大标题</div>
      </template>
      <template #content>
        <div>我是内容</div>
      </template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
      
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