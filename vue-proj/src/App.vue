<script setup>
import { ref } from 'vue'

const items = ref(['foo', 'bar'])
const inputVal = ref('default input val')

function tmp () {
  console.log(inputVal.value)
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="tmp" />
  <!-- https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue -->
  <hello-world
    :data="inputVal"
    :items="JSON.stringify(items)"
    .items-for-vue="items"
    msg="Web component in Vue proj"
    @update="$e => inputVal = $e.detail[0]"
  >
    <div slot="header">header</div>
    <div>Vue slot</div>
  </hello-world>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
/* outside the shadow DOM */
hello-world::part(foo) {
  --h2-color: #42b883;
  background: lightgray;
}

hello-world::part(header):hover {
  color: red;
}
</style>
