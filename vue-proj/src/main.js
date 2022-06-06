import { createApp } from 'vue'
import App from './App.vue'
import { registerAllCustomElements } from '../../my-components/dist/my-lib.es'

registerAllCustomElements()
// customElements.define('my-hello-world', MyHelloWorld)

createApp(App).mount('#app')
