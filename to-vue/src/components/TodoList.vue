<template>
  <ul class="todo-list">
    <li class="todo" v-for="(data, idx) in $store.state.todoData" :key="idx">
      <input type="checkbox">
      <p>{{ data.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
}
</script>

<style>
.todo-list {
  margin: auto;
  padding: 30px;
}

.todo {
  list-style: none;
  text-align: start;
  padding: 20px;
  display: flex;
}

.todo > input {
  margin-right: 1em;
}
</style>