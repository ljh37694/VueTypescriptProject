<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li class="todo" v-for="(data, idx) in todoData" :key="idx">
        <input type="checkbox" @click="completeTodo(idx)">
        <p class="todo-content" :class="data.done ? 'done' : ''">{{ data.content }}</p>
        <p class="todo-created-time">{{ data.createdDate.toDateString() }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex';

export default {
  name: "TodoList",
  computed: {
    ...mapState(['todoData']),
  },
  methods: {
    ...mapMutations(['completeTodo']),
  }
}
</script>

<style>
.todo-list-container {
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.todo-list {
  margin: auto;
  padding: 30px;
  overflow-y: hidden;
}

.todo {
  list-style: none;
  text-align: start;
  padding: 20px;
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    word-wrap: break-word;
  }
}

.todo>input {
  margin-right: 1em;
}

.todo-content {
  width: 60%;
}

.todo-created-time {
  width: 40%;
  font-size: 12px;
  color: #989898;
  text-align: right;
}

.done {
  text-decoration: line-through;
  color: #989898;
}
</style>