<script setup>
import { NaverMap, NaverCircle } from "vue3-naver-maps";
import { mapMutations, mapState } from "vuex";

const circle = ref();

const onLoadMap = (map) => {
  const latLng = new window.naver.maps.LatLng(37.51347, 127.041722); // window 생략 가능
  map.panTo(latLng); // Change Map Center
};

const onLoadCircle = (circleObject) => {
  circle.value = circleObject;
};
</script>

<template>
  <div id="map">
    <naver-map style="width: 100%; height: 100%" @onLoad="onLoadMap($event)" ref="MainMap" :mapOptions="mapOptions">
      <naver-circle :latitude="37.51347" :longitude="127.041722" :radius="350" @onLoad="onLoadCircle($event)"
        ref="cicle" />
    </naver-map>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainMap",
  computed: {
    ...mapState(['curGeolocation', 'mapOptions']),
  },
  methods: {
    ...mapMutations(['setCurGeolocation']),
  },
  mounted() {
  },
  beforeMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setCurGeolocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  },
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