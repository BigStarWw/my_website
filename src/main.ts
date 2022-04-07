import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as common from './assets/js/common'
import * as constant from './assets/js/constant'
import 'amfe-flexible';


const app = createApp(App)

app.config.globalProperties.$common = common
app.config.globalProperties.$constant = constant

app.use(router)
   .mount('#app')
