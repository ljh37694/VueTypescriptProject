<template>
  <div id="main-container">
    <MainPage />
  </div>
</template>

<script lang="ts">
import MainPage from './pages/MainPage.vue';

export default {
  name: "App",
  components: {
    MainPage,
  }
}
</script>

<style>
@font-face {
  font-family: 'KCC-Ganpan';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #eee;
  margin: 0;
  height: 100vh;
  padding: 50px auto;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: 'KCC-Ganpan', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  height: 100vh;
  margin: auto;
}

#main-container {
  height: 100%;
  text-align: center;
  color: #2c3e50;
  width: 550px;
  height: 100%;
  margin: auto;
  background-color: #eee;
  border-radius: 15px;
  padding: 30px;
}

header {
  height: 10%;
}

main {
  height: 80%;
}

footer {
  height: 10%;
}

.none-highlight {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* 인터넷익스플로러 */
  user-select: none;
}
</style>
