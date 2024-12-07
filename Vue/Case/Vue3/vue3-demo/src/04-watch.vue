<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const nickname = ref('saber')

const changCount = () => {
  count.value++
}
const changNickname = () => {
  nickname.value = 'Saber'
}

// 1. 监视单个数据的变化
// watch(ref对象, (newValue, oldValue) => { ... })
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// 2. 监听多个数据的变化
// watch([ref对象1, ref对象2], (newArr, oldArr) => { ... })
// watch([count, nickname], (newArr, oldArr) => {
//   console.log(newArr, oldArr)
// })

// 3. immediate 立刻执行
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// }, {
//   immediate: true
// })


// 4. deep 深度监视，默认 watch 进行的是 浅层监视
// const ref1 = ref(简单类型) 可以直接监视
// const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: 'sz',
  age: 18
})
const setUserInfo = () => {
  userInfo.value.age++
  // userInfo.value = { name: 'saber', age:17 }
}
// watch(userInfo, (newValue) => {
//   console.log(newValue)
// }, {
//   deep: true
// })

// 5. 对于对象中的属性，进行监视
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>

<template>
  <div>{{ count }}</div>
  <button @click="changCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changNickname">改名字</button>
  <div>------------------------------</div>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改userInfo</button>
</template>