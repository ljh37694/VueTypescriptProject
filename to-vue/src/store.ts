import { createStore } from "vuex";
import data from "./data";
import { TodoType } from "./data";

export interface State {
  todoData: TodoType[],
  currentDate: Date,
}

const store = createStore<State>({
  state() {
    return {
      todoData: data,
      currentDate: new Date(),
    }
  },
  mutations: {
    plusDate(state: State, number: number): void {
      state.currentDate = new Date(state.currentDate.setDate(state.currentDate.getDate() + number));
    },
    pushTodo(state: State, data: TodoType): void {
      const tmpData: TodoType[] = [...state.todoData, data];
    },
  }
});

export default store;