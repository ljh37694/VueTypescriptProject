<script setup>
import { NaverMap, NaverCircle, NaverMarker } from "vue3-naver-maps";
import { mapMutations, mapState } from "vuex";
import { ref } from "vue";

const circle = ref();
const mainMap = ref();

const onLoadCircle = (circleObject) => {
  circle.value = circleObject;
};

const onLoadMap = (mapObject) => {
  mainMap.value = mapObject;
};
</script>

<template>
  <div id="map">
    <naver-map style="width: 100%; height: 100%" @onLoad="onLoadMap($event)" :mapOptions="mapOptions" ref="Map">
      <naver-circle :latitude="37.51347" :longitude="127.041722" :radius="350" @onLoad="onLoadCircle($event)"
        ref="cicle" />
      <naver-marker v-for="(data, idx) in searchData" :key="idx" :latitude="data.mapy / 10000000" :longitude="data.mapx / 10000000" />
    </naver-map>
  </div>
</template>

<script>
export default {
  name: "MainMap",
  data() {

  },
  computed: {
    ...mapState(['curGeolocation', 'mapOptions', 'searchData', 'map']),
  },
  methods: {
    ...mapMutations(['setCurGeolocation', 'setMap']),
  },
  beforeMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setCurGeolocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  },
  mounted() {
    this.map = this.$refs.Map;
  }
}
</script>

<style>
#map {
  height: 100%;
  flex-grow: 1;
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  z-index: 1;
}
</style>