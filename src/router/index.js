import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'survey',
        component: () => import ('../pages/Survey.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import ('../pages/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router