import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingPage from '../components/ShoppingPage';
import About from '../components/About';
import Welcome from "../components/Welcome.vue";
import PageNotFound from "../components/PageNotFound.vue";
import AddToShoppingList from "../components/AddToShoppingList.vue";

Vue.use(VueRouter)
//пути пеерехода
const routes = [
    {
        path: '/shoppingpage',
        name: 'ShoppingPage',
        component: ShoppingPage
    },
    {
        path: '/shoppingpage/:activePage',
        name: 'ShoppingPages',
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
        path: '/add/payment/:category',
        name: 'AddToShoppingList',
        component: AddToShoppingList
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
//подписи страниц при роутинге
const getTitleByRouteName = routeName => {
    return {
        'ShoppingPage': 'Take a look on your shopping activity and add more!',
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