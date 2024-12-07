<script setup>
import Son1Com from './components/Son1Com.vue'
import Son2Com from './components/Son2Com.vue' 
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from '@/store/channel'
import { storeToRefs } from 'pinia';
const CounterStore = useCounterStore()
const ChannelStore = useChannelStore()

// 此时，直接结构，不处理，数据会丢失响应式
const { count, msg } = storeToRefs(CounterStore)
// const { channelList } = storeToRefs(ChannelStore)
const { getList } = ChannelStore
</script>

<template>
  <div>
    <h3>
      APP.vue根组件
      -  {{ count }}
      -  {{ msg }}
    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
  </div>
</template>

<style scoped>

</style>
