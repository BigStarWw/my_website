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
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router