<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: String,
})
const emit = defineEmits(['update'])

const computedValue = computed({
  get: () => props.value,
  set: (val) => emit('update', val)
})
</script>

<template>
  <input type="text" v-model="computedValue" />
</template>

<style scoped>
input {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
