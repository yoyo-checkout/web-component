<script setup>
import { computed } from 'vue'

const props = defineProps({
  arrayItems: {
    type: Array,
    default: () => [],
  },
  stringItems: {
    type: String,
    default: '[]',
  },
})

const jsonItems = computed(() => JSON.parse(props.stringItems))
</script>

<template>
  <div class="row">
    <!-- for loop (array format) -->
    <ul class="list">
      <li v-for="item in arrayItems" class="item">{{ item }}</li>
    </ul>

    <!-- for loop (json format) -->
    <ul class="list">
      <li v-for="item in jsonItems" class="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.list {
  background-color: #c5c5c5;
}
.item {
  margin: 0.5rem 0;
  border-bottom: 1px solid black;
}
</style>
