<script setup>
import { useCounterStore } from '@/store/counter'
const CounterStore = useCounterStore()
</script>

<template>
  <div>
    我是Son1.vue 
    - {{ CounterStore.count }} 
    - {{ CounterStore.double }}
    - <button @click="CounterStore.addCount">+</button>
  </div>
</template>

<style scoped>

</style>
