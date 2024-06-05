import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      mapOptions: {
        latitude: 37.51347, // 지도 중앙 위도
        longitude: 127.041722, // 지도 중앙 경도
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: { position: "TOP_RIGHT", style: "SMALL" },
      },
      map: null,
      activeNavMenu: 0,
      curGeolocation: {
        latitude: 0,
        longitude: 0,
      },
      searchData: [],
    }
  },
  mutations: {
    changeActiveNavMenu(state, index) {
      state.activeNavMenu = index;
    },
    setCurGeolocation(state, geolocation) {
      state.curGeolocation.latitude = geolocation;
    },
    setSearchData(state, data) {
      state.searchData = [...data];
    },
    setMapCenter(state, data) {
      state.mapOptions.center._lat = data.mapy / 10000000;
      state.mapOptions.center._lng = data.mapx / 10000000;

      console.log(state.mapOptions.center);
    },
    setMap(state, map) {
      state.map = map;
    }
  }
});

export default store;