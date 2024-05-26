import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      activeNavMenu: 0,
    }
  },
  mutations: {
    changeActiveNavMenu(state, index) {
      state.activeNavMenu = index;
    }
  }
});

export default store;