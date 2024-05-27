<template>
  <div id="map">
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