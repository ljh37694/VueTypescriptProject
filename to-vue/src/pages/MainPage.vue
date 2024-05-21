<template>
  <header>
    <DateHeader />
  </header>
  <main>
    <TodoList />
  </main>
  <footer>
    <TodoPushFooter />
  </footer>
</template>

<script>
import DateHeader from '../components/DateHeader.vue';
import TodoList from '../components/TodoList.vue';
import TodoPushFooter from '../components/TodoPushFooter.vue';

export default {
  name: "MainPage",
  components: {
    DateHeader,
    TodoList,
    TodoPushFooter,
  }
}
</script>

<style></style>