<script setup>
import { onMounted, computed } from 'vue'

const props = defineProps({
  items: String,
  itemsForVue: {
    type: Array,
    default: () => [],
  },
  data: String,
})
const emit = defineEmits(['update'])

const jsonItems = computed(() => JSON.parse(props.items))
const computedModelValue = computed({
  get: () => props.data,
  set: (val) => emit('update', val)
})

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div part="foo">
    <!-- for loop -->
    <ul>
      <li v-for="item in jsonItems">{{ item }}</li>
    </ul>

    <!-- for loop (vue 語法糖) -->
    <ul>
      <li v-for="item in itemsForVue">{{ item }}</li>
    </ul>

    <div>
      <input type="text" v-model="computedModelValue" />
    </div>
  </div>
</template>
