<template>
  <div class="header">
      我是header
      <HmButton></HmButton>
  </div>
</template>

<script>
import HmButton from './HmButton.vue'
export default {
    // 局部注册：注册的组件只能在当前的组件范围内
    components: {
        HmButton
    }
}
</script>

<style>
.header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    background-color: #8064a2;
    color: white;
}
</style>