import { createStore } from "vuex";
import data from "./data";

const store = createStore({
  state() {
    return {
      todoData: data,
      currentDate: new Date().toDateString(),
    }
  },
});

export default store;