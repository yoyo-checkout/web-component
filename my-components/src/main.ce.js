import { defineCustomElement } from 'vue'
import List from '@/components/List.ce.vue'
import Button from '@/components/Button.ce.vue'
import Input from '@/components/Input.ce.vue'

const MyList = defineCustomElement(List)
const MyButton = defineCustomElement(Button)
const MyInput = defineCustomElement(Input)

// export individual elements
export { MyList, MyButton, MyInput }

export function registerAllCustomElements() {
  customElements.define('my-list', MyList)
  customElements.define('my-button', MyButton)
  customElements.define('my-input', MyInput)
}
