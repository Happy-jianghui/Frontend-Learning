<script setup>
const count = 999
defineExpose({
    count
})

</script>
 
<template>
  <div>
    <h3>我是用于测试的组件 - {{ count }}</h3>
  </div>
</template>