import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const app=createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  
})


app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');

