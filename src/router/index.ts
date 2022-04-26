import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
    
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/index.vue')
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('../views/demo/index.vue')
    },
    {
        path: '/demo-repl',
        name: 'DemoRepl',
        component: () => import('../views/demo/repl.vue')
    },
    {
        path: '/demo-scroll',
        name: 'scroll',
        component: () => import('../views/demo/scroll.vue')
    }
    
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router