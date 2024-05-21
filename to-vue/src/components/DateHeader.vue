<template>
  <div class="date-header-container">
    <div class="date-left">
      <label @click="plusDate(-1)">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </label>
    </div>
    <div class="date-middle none-highlight">
      <p>{{ currentDate.toDateString() }}</p>
    </div>
    <div class="date-right">
      <label @click="plusDate(1)">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from "vuex";

export default {
  name: "DateHeader",
  computed: {
    ...mapState(['currentDate']),
  },
  methods: {
    ...mapMutations(['plusDate']),
  },
}
</script>

<style>
.date-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: blue;
}

.date-left,
.date-right {
  width: 20%;
}

.date-middle {
  width: 60%;

  &>p {
    display: inline;
  }
}
</style>