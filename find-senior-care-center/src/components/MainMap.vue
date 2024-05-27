<script setup>
import { NaverMap } from "vue3-naver-maps";

const onLoadMap = (map) => {
  const latLng = new window.naver.maps.LatLng(37.51347, 127.041722); // window 생략 가능
  map.setCenter(latLng); // Change Map Center
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
}
</script>

<style>
#map {
  height: 100%;
  flex-grow: 1;
  position: absolute;
  left: 80px;
  width: calc(100% - 80px);
  background-color: aqua;
  z-index: 1;
}
</style>