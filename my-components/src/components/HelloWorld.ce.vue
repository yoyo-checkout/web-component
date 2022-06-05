<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  msg: String,
  items: String,
  itemsForVue: {
    type: Array,
    default: () => [],
  },
  data: String,
})
const emit = defineEmits(['update'])

const count = ref(0)
const jsonItems = computed(() => JSON.parse(props.items))
const computedModelValue = computed({
  get: () => props.data,
  set: (val) => emit('update', val)
})

function handleItemClick(item) {
  console.log(item)
}

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div part="foo">
    <!-- for loop -->
    <ul>
      <li v-for="item in jsonItems" @click="handleItemClick(item)">{{ item }}</li>
    </ul>

    <!-- for loop (vue 語法糖) -->
    <ul>
      <li v-for="item in itemsForVue">{{ item }}</li>
    </ul>

    <!-- named slot -->
    <header part="header">
      <slot name="header"></slot>
    </header>

    <!-- default slot -->
    <div>
      <h2>This is default slot:</h2>
      <div><slot /></div>
    </div>

    <!-- Scoped slots are not supported. -->
    <!-- <div><slot name="slot-prop" :prop="slotProp"></slot></div> -->

    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>

    <div>
      <input type="text" v-model="computedModelValue" />
    </div>
  </div>
</template>

<style scoped>
h2 { 
  color: var(--h2-color);
  font-size: 32px;
}
</style>
