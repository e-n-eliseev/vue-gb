import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingPage from '../components/ShoppingPage';
import About from '../components/About';
import Welcome from "../components/Welcome.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/shoppingpage',
        name: 'ShoppingPage',
        component: ShoppingPage
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router