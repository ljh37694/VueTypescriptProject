<template>
  <div>
    <SideNavbar @click="$store.commit('increment')" />
  </div>
  <font-awesome-icon :icon="['fas', 'user-secret']"></font-awesome-icon>
</template>

<script>
import SideNavbar from './components/SideNavbar.vue';

export default {
  name: 'App',
  components: {
    SideNavbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
