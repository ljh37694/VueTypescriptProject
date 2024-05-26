<template>
  <SideNavbar />
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
@font-face {
  font-family: 'yg-jalnan';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Cafe24Ssurround';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  font-family: 'Cafe24Ssurround';
}

body {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
}

a:visited,
a:link {
  color: rgb(255, 203, 31);
  text-decoration: none;
}


#app {
  font-family: 'Cafe24Ssurround';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
