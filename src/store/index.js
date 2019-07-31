import Vue from 'vue';
import Vuex from 'vuex';

import getters from "./getters"
import user from "./modules/user"
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user,
    },
    getters //也就是Vuex里面的计算属性，复杂监听state数据的实时变化，并且只有当其依赖发送变化时，
});
export default store;