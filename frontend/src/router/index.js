import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
