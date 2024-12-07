<script setup>
// 子组件
// 注意：由于写了 setup，所以无法直接配置 props 选项
// 所以：此处需要借助于“编译器宏”函数接受子组件传递的数据
const porps = defineProps({
    Message: String,
    money: Number
})
const emit = defineEmits(['changeMoney'])
console.log(porps.Message)

const sub = () => {
    // 需要 emit 触发事件
    emit('changeMoney',  5)
}

</script>
 
<template>
    <!--  对于porps传递过来的数据，模版中可以直接使用 -->
  <div class ="son">我是子组件-{{ Message }} - {{ money }}</div>
  <button @click="sub">-10</button>
</template>

<style scoped>
.son {
    border: 1px solid pink;
    padding: 30px;
}
</style>