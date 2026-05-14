import { createApp } from 'vue'
import App from './App.vue'
import { Button, Card } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import '../styles.css'

createApp(App)
  .use(Button)
  .use(Card)
  .mount('#app')
