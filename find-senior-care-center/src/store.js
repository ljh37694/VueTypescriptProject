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
      mapOptions: {
        latitude: 37.51347, // 지도 중앙 위도
        longitude: 127.041722, // 지도 중앙 경도
        zoom: 13,
        zoomControl: false,
        zoomControlOptions: { position: "TOP_RIGHT" },
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