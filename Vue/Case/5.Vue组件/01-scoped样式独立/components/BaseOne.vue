<template>
  <div class="base-one">
    BaseOne
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
/*
  1. 默认的style样式，会作用于全局 -> 全局样式
  2. 加上scoped属性的style样式，只会作用域当前组件 -> 局部样式

  组件应该有自己独立的样式，推荐加scoped
  scoped原理：
  1. 给当前组件模版的所有元素，都会被添加一个自定义属性data-v-hash值 
  2. css选择器后面，被自动处理了，添加上了属性选择器
    div[data-v-5f6a9d56] 
*/
div {
  border: 3px solid pink;
  margin: 30px
}
</style>