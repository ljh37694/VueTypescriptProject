import { createStore } from "vuex";
import { TodoType } from "./data";

export interface State {
  todoData: TodoType[],
  currentDate: Date,
}

const store = createStore<State>({
  state() {
    return {
      todoData: [],
      currentDate: new Date(),
    }
  },
  mutations: {
    plusDate(state: State, number: number): void {
      state.currentDate = new Date(state.currentDate.setDate(state.currentDate.getDate() + number));
    },
    pushTodo(state: State, data: TodoType): void {
      const tmpData: TodoType[] = [...state.todoData, data];

      state.todoData = tmpData;
    },
    completeTodo(state: State, index: number) {
      const tmpData: TodoType[] = [...state.todoData];

      tmpData[index].done = !tmpData[index].done;

      state.todoData = tmpData;
    },
  }
});

export default store;