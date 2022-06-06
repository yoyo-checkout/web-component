<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary'].includes(val),
  },
  size: {
    type: String,
    default: 'small',
    validator: (val) => ['small', 'large'].includes(val),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['custom-click'])
</script>

<template>
  <button
    :class="[type, size, { disabled: disabled }]"
    type="button"
    @click="$emit('custom-click')"
  >
    <!-- named slot -->
    <slot name="prefix"></slot>
    <!-- default slot -->
    <slot></slot>
    <div part="postfix" class="postfix">😀</div>

    <!-- Scoped slots are not supported. -->
    <!-- <div><slot name="slot-prop" :prop="slotProp"></slot></div> -->
  </button>
</template>

<style scoped>
button { 
  display: inline-flex;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #fff;
}
button.disabled {
  opacity: .65;
  pointer-events: none;
}
button:not(.disabled):hover {
  cursor: pointer;
}
button.large {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

button.primary {
  background-color: #007bff;
  border-color: #007bff;
}
button:not(.disabled).primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

button.secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}
button:not(.disabled).secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.postfix {
  margin-left: 0.5rem;
  font-size: var(--postfix-font-size);
}
</style>
