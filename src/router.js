import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/Homepage.vue'
import ProjectsIndex from './pages/portfolio/Index.vue'
import ProjectsShow from './pages/portfolio/Show.vue'


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
            name: 'projects',
            component: ProjectsIndex,
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            component: ProjectsShow,
        }
    ]
})

export { router }

// {
//     path:,
//     name:,
//     component:,
// }