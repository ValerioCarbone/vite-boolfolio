import { createRouter, createWebHistory } from 'vue-router'

import Homepage from './pages/Homepage.vue'
import ProjectIndex from './pages/portfolio/Index.vue'
import ProjectShow from './pages/portfolio/Show.vue'
import TypeArchive from './pages/type/Archive.vue'
import NotFound from './pages/404.vue'


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
        },
        {
            path: '/type/:slug',
            name: 'type.archive',
            props: true,
            component: TypeArchive,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        }


    ]
})
export { router }