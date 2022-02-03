import Vue from 'vue';
import Vuex from 'vuex';
import shoppingList from '../../ShoppingList.js';
import categoriesList from '../../CategoriesList.js';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        shoppingList: [],
        categoryList: [],
    },
    mutations: {
        setShoppingListData(state, payload) {
            state.shoppingList = payload
        },
        addDataToShoppingList(state, payload) {
            state.shoppingList.push(payload)
        },
        deleteDataToShoppingList(state, payload) {
            state.shoppingList.splice(payload, 1)
        },
        setCategories(state, payload) {
            state.categoryList = payload
        },
        addDataToCategoryList(state, payload) {
            state.categoryList.push(payload)
        },
    },
    getters: {
        getShoppingList: state => state.shoppingList,
        getFullShoppingValue: state => {
            return state.shoppingList
                .reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList,
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(shoppingList)
                }, 2000)
            }).then(res => {
                commit('setShoppingListData', res)
            })

        },
        loadCategories({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(categoriesList)
                }, 2000)
            })
                .then(res => {
                    commit('setCategories', res)
                })
        },
    },
})