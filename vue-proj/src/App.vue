<script setup>
import { ref } from 'vue'

const items = ref(['foo', 'bar'])
const inputVal = ref('default input val')

function submit() {
  console.log(inputVal.value)
}
function cancel() {
  console.log('cancel')
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- list -->
  <my-list
    :array-items="items"
    :string-items="JSON.stringify(items)"
  />
  <my-list
    .array-items="items"
  />

  <!-- button -->
  <div class="buttons">
    <div>
      <div>use [css var] to modify style inner web component</div>
      <my-button type="secondary" class="use-css-var">
        Text
      </my-button>
    </div>

    <div>
      <div>use [::part] to modify style inner web component</div>
      <my-button type="secondary" class="use-part">
        Text
      </my-button>
    </div>

    <div>
      <div>directly add class to modify style of slot</div>
      <my-button type="secondary">
        <div slot="prefix">😂</div>
        <div class="ml-1">Text</div>
      </my-button>
    </div>
  </div>

  <!-- input -->
  <my-input
    :value="inputVal"
    @update="$e => inputVal = $e.detail[0]"
  />

  <!-- form demo -->
  <div class="buttons">
    <my-button type="secondary" @custom-click="cancel">
      cancel
    </my-button>
    <my-button :disabled="inputVal === ''" size="large" @custom-click="submit">
      submit
    </my-button>
  </div>
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
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

.ml-1 {
  margin-left: 1rem;
}

my-button.use-css-var {
  --postfix-font-size: 40px;
}

my-button.use-part::part(postfix) {
  font-size: 28px;
}

my-button.use-part::part(postfix):hover {
  opacity: 0;
}
</style>
