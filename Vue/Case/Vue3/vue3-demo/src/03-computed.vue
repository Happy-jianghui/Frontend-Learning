<script setup>
  // const 计算属性 = computed(() => {
  //    return 计算返回结果
  // })
  
  import { computed, ref } from 'vue'
  // 声明数据
  const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

  // 基于 list 派生一个计算属性，从 list 中 过滤出 > 2
  const computedList = computed(() => {
    return list.value.filter(item => item > 2)
  })
  // console.log(computedList.value)
</script>

<template>
  <div>
    <div>原始数据：{{ list }}</div>
    <div>修改数据：{{ computedList }}</div>
  </div>
</template>