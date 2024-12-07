<script setup>
import { onMounted } from 'vue';


// beforeCreate 和 create 的相关代码
// 一律放在 setup 中执行

const getList = () => {
  setTimeout(() => {
    console.log('发送请求，获取数据')
  }, 2000)
}
// 一进入页面请求
getList()

// 如果有些代码需要在 mounted 声明周期中执行
onMounted(() => {
  console.log('mounted声明周期函数1')
})

// 写成函数的调用方式，可以调用多次，并不会冲突，而是按照顺序依次执行
onMounted(() => {
  console.log('mounted声明周期函数2')
})

</script>

<template>
  <div></div>
</template>