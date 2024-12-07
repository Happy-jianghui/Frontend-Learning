<script setup>
import myInput from './components/my-input备份.vue'
import { ref } from 'vue'
const txt = ref('123456')
</script>

<template>
  <div>
    <myInput v-model="txt"></myInput>
    {{ txt }}
  </div>
</template> 