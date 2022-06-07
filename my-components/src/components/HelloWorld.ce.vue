<script setup>
import { onMounted, computed } from 'vue'

const props = defineProps({
  data: String,
})
const emit = defineEmits(['update'])

const computedModelValue = computed({
  get: () => props.data,
  set: (val) => emit('update', val)
})

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <input type="text" v-model="computedModelValue" />
</template>
