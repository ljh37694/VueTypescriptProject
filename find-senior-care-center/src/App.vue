<template>
  <SideNavbar />
  <MainPanel />
  <MainMap />
</template>

<script>
import MainPanel from './components/MainPanel.vue';
import MainMap from './components/MainMap.vue';
import SideNavbar from './components/SideNavbar.vue';

export default {
  name: 'App',
  components: {
    SideNavbar,
    MainPanel,
    MainMap,
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

@font-face {
  font-family: 'NanumSquareRound';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  font-family: 'NanumSquareRound';
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
  font-family: 'yg-jalnan';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  background-color: #fff;
  position: relative;
}
</style>
