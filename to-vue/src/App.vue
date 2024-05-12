<template>
  <header>
    <DateHeader />
  </header>
  <main>
    <TodoList />
  </main>
  <footer>추가 버튼</footer>
</template>

<script lang="ts">
import DateHeader from './components/DateHeader.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: "App",
  components: {
    DateHeader,
    TodoList,
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
}

#app {
  font-family: 'KCC-Ganpan', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50vw;
  height: 100vh;
  margin: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  margin-top: 1px;
}

div {
  box-sizing: border-box;
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
</style>
