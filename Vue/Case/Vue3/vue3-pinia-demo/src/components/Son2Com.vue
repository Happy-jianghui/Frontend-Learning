<script setup>
import { useCounterStore } from '@/store/counter'
const CounterStore = useCounterStore()
</script>

<template>
  <div>
    <div>
    我是Son2 .vue - {{ CounterStore.count }} - <button @click="CounterStore.subCount">-</button>
  </div>
  </div>
</template>

<style scoped>

</style>
