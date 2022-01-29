export const state = {
  toggle: true,
};

export const getters = {
  toggle: state => state.toggle
};

export const mutations = {
  TOGGLE_CLASS_MENU(state) {
    state.toggle = !state.toggle;
  },
};

export const actions = {
  toggleClass({commit}) {
    commit("TOGGLE_CLASS_MENU")
  },
};

export default {state, getters, mutations, actions, namespaced: true};
