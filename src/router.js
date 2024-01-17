import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/Homepage.vue'
import ProjectIndex from './pages/portfolio/Index.vue'
import ProjectShow from './pages/portfolio/Show.vue'


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
            name: 'projects.index',
            component: ProjectIndex,
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            props: true,
            component: ProjectShow,
        }
    ]
})
export { router }