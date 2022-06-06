import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'
import Button from '@/components/Button.ce.vue'

const MyHelloWorld = defineCustomElement(HelloWorld)
const MyButton = defineCustomElement(Button)

// export individual elements
export { MyHelloWorld, MyButton }

export function registerAllCustomElements() {
  customElements.define('my-hello-world', MyHelloWorld)
  customElements.define('my-button', MyButton)
}
