<template>
  <div class="todo-push-footer-container">
    <input id="todo-input">
    <button @click="pushTodoButton()">+</button>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';

export default {
  name: "TodoPushFooter",
  methods: {
    ...mapMutations(['pushTodo']),
    pushTodoButton(): void {
      
    }
  },
}
</script>

<style>
.todo-push-footer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    height: 1em;
    width: 20em;
    padding: 10px;
  }

  & > button {
    border: none;
    color: blue;
    background-color: inherit;
    height: 1.5em;
    width: 1.5em;
    padding: 10px;
    font-size: 40px;
    text-align: center;
  }
}
</style>