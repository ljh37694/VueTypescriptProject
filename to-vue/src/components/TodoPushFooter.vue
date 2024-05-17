<template>
  <div class="todo-push-footer-container">
    <input @keyup.enter="clickTodoButton" id="todo-input" :maxlength="40">
    <button @click="clickTodoButton">+</button>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import { TodoType } from '@/data';

export default {
  name: "TodoPushFooter",
  methods: {
    ...mapMutations(['pushTodo']),
    clickTodoButton(): void {
      let content: String | null = (document?.getElementById("todo-input") as HTMLInputElement)?.value;

      (document.getElementById("todo-input") as HTMLInputElement).value = "";

      if (content instanceof String || content !== "") {
        let todo: TodoType = {
          content: content,
          createdDate: new Date(),
          done: false,
        };

        this.pushTodo(todo);
      }
    }
  },
}
</script>

<style>
.todo-push-footer-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    height: 1.5em;
    width: 65%;
    padding: 1em;
  }

  & button {
    border: none;
    color: blue;
    background-color: inherit;
    height: 1.5em;
    width: 1.5em;
    font-size: 2em;
    text-align: center;
    vertical-align: middle;
  }
}
</style>