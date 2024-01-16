import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/Homepage.vue'
import Portfolio from './pages/portfolio/Index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/portfolio/:slug',
            name: 'portfolio.show',
            component:,
        }
    ]
})

export { router }

// {
//     path:,
//     name:,
//     component:,
// }