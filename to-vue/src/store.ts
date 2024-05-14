import { createStore } from "vuex";
import data from "./data";

export interface State {
  todoData: unknown,
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
  }
});

export default store;