<script setup>
defineProps({
    modelValue: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
    :value="modelValue"
    type="text"
    @input="e => emit('update:modelValue', e.target.value)">
  </div>
</template> 