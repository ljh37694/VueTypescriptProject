<script setup>
import { NaverMap } from "vue3-naver-maps";

const onLoadMap = (map) => {
  let latitude = 0;
  let longitude = 0;

  navigator.geolocation.getCurrentPosition(pos => {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;


    const latLng = new window.naver.maps.LatLng(latitude, longitude); // window 생략 가능
    map.panTo(latLng); // Change Map Center
  });
};

</script>

<template>
  <div id="map">
    <naver-map style="width: 100%; height: 100%" @onLoad="onLoadMap($event)" />
  </div>
</template>

<script>
export default {
  name: "MainMap",
  mounted() {
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