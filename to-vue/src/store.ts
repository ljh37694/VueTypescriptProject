import { createStore } from "vuex";
import data from "./data";

const store = createStore({
  state() {
    return {
      todoData: data,
    }
  },
});

export default store;