import { defineCustomElement } from 'vue'
import HelloWorld from '@/components/HelloWorld.ce.vue'

window.customElements.define('hello-world', defineCustomElement(HelloWorld))
