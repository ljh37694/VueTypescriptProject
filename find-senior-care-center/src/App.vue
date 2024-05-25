<template>
  <SideNavbar @click="$store.commit('increment')" />
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
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a:visited,
a:link {
  color: rgb(255, 225, 31);
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
