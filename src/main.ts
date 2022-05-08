import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as common from './assets/js/common'
import * as constant from './assets/js/constant'
import setupBaseComponents from './components/index'
import 'amfe-flexible';

const app = createApp(App)

// 注册全局组件
setupBaseComponents(app)

// 全局properties
app.config.globalProperties.$common = common
app.config.globalProperties.$constant = constant

app.use(router)
   .mount('#app')
