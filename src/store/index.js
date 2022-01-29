import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import menu from './modules/menu';
import about from './modules/about'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    
  },
  modules: {
    todos,
    menu,
    about
  },
})
