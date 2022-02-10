import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
//пути пеерехода
const routes = [
    {
        path: '/shoppingpage/:activePage',
        name: 'ShoppingPages',
        component: () => import(/* webpackChunkName: "Home" */
            '../components/ShoppingPage.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "Home" */
            '../components/About.vue')
    },
    {
        path: '/',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "Home" */
            '../components/Welcome.vue')
    },
    {
        path: '/add/payment/:category',
        name: 'AddToShoppingList',
        component: () => import(/* webpackChunkName: "Home" */
            '../components/AddToShoppingList.vue')
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: () => import(/* webpackChunkName: "Home" */ '../components/PageNotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//подписи страниц при роутинге
const getTitleByRouteName = routeName => {
    return {
        'ShoppingPages': 'Take a look on your shopping activity and add more!',
        'About': 'A piece of information about this app',
        'Welcome': 'Welcome to shopping list aplication',
        'AddToShoppingList': 'Your information is added automatically',
        'PageNotFound': 'Something goes wrong!'
    }[routeName]
}
router.afterEach((to,) => {
    document.title = getTitleByRouteName(to.name)
})

export default router