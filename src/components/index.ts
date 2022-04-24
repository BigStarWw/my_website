import { App } from 'vue'
import BaseHeader from './base-header/index.vue'
import BaseFooter from './base-footer/index.vue'
import BaseToolbar from './base-toolbar/index.vue'


const components = [
    BaseHeader,
    BaseFooter,
    BaseToolbar,
]

/**
 * 全局注册自定义组件
 * @param app
 */
export default function setupBaseComponents(app: App) {
    components.forEach(item => {
        console.log('item', item)
        app.component(item.name, item)
    })
}

