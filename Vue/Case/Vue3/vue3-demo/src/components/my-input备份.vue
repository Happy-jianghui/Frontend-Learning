<script setup>
import { defineModel } from 'vue'
const modelValue = defineModel()
</script>

<template>
  <div>
    <input
    :value="modelValue" 
    type="text"
    @input="e => modelValue = e.target.value">
  </div>
</template> 