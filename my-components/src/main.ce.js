import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'
import List from '@/components/List.ce.vue'
import Button from '@/components/Button.ce.vue'

const MyHelloWorld = defineCustomElement(HelloWorld)
const MyList = defineCustomElement(List)
const MyButton = defineCustomElement(Button)

// export individual elements
export { MyHelloWorld, MyButton }

export function registerAllCustomElements() {
  customElements.define('my-hello-world', MyHelloWorld)
  customElements.define('my-list', MyList)
  customElements.define('my-button', MyButton)
}
