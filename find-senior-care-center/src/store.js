import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      activeNavMenu: 0,
      curGeolocation: {
        latitude: 0,
        longitude: 0,
      },
    }
  },
  mutations: {
    changeActiveNavMenu(state, index) {
      state.activeNavMenu = index;
    },
    setCurGeolocation(state, geolocation) {
      state.curGeolocation.latitude = geolocation;
    },
  }
});

export default store;