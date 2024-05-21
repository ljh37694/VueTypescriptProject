<template>
  <div class="todo-list-container">
    <ul class="todo-list">
      <li class="todo" v-for="(data, idx) in todoData" :key="idx">
        <div class="todo-container">
          <input type="checkbox" @click="completeTodo(idx)">
          <p class="todo-content none-highlight" :class="data.done ? 'done' : ''" @click="completeTodo(idx)">{{
            data.content }}</p>

          <div class="todo-option-button">
            <p @click="clickOptionButton(idx)">
              <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
            </p>
          </div>
        </div>

        <div v-if="optionToggle === idx" class="todo-options-container">
          <p class="todo-edit-button">수정</p>
          <p class="todo-delete-button">삭제</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { MutationMethod, mapMutations, mapState } from 'vuex';

export default {
  name: "TodoList",
  data() {
    return {
      optionToggle: -1,
    }
  },
  computed: {
    ...mapState(['todoData']),
  },
  methods: {
    ...mapMutations(['completeTodo', 'optionToggle']),
    clickOptionButton(idx: number): void {
      if (this.optionToggle === -1) {
        this.optionToggle = idx as (number & MutationMethod);
        console.log(this.optionToggle);
      } else {
        this.optionToggle = -1 as (number & MutationMethod);
        console.log(this.optionToggle);
      }
    },
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
  padding: 20px;
  overflow-y: hidden;
}

.todo {
  list-style: none;
  text-align: start;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-bottom: 1px solid #dadada;

  & p {
    margin: 0;
    word-wrap: break-word;
  }

  &:first-child {
    border-top: 1px solid #dadada;
  }
}

.todo-container {
  display: flex;
  justify-content: center;
  width: 100%;

  &>input {
    margin-right: 2em;
    width: 1em;
  }
}

.todo-content {
  width: 80%;
  flex-grow: 1;
}

.todo-option-button {
  width: 10%;
  font-size: 18px;
  color: #989898;
  text-align: right;
  display: flex;
  justify-content: right;
  align-items: center;

  & > p {
    padding: 0 3px;
  }
}

.todo-options-container {
  display: flex;
  margin-top: 10px;

  & p {
    width: 50%;
    text-align: center;
    color: #fff;
  }
}

.todo-edit-button {
  background-color: #989898;
}

.todo-delete-button {
  background-color: red;
}

.done {
  text-decoration: line-through;
  color: #989898;
}
</style>