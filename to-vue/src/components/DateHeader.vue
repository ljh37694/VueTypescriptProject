<template>
  <div class="date-header-container">
    <div class="date-left">
      <label @click="plusDate(-1)">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </label>
    </div>
    <div class="date-middle none-highlight">
      <p :style="dateColor">{{ currentDate.toDateString() }}</p>
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
  data() {
    return {
      koreanDay: ['일', '월', '화', '수', '목', '금', '토'],
      dateColor: {
        color: "black",
      }
    }
  },
  computed: {
    ...mapState(['currentDate']),
  },
  methods: {
    ...mapMutations(['plusDate']),
  },
  updated() {
    const day: number = this.currentDate.getDay();

    if (day === 0) {
      this.dateColor.color = 'red';
    } else if (day === 6) {
      this.dateColor.color = 'blue';
    } else {
      this.dateColor.color = 'black';
    }
  }
}
</script>

<style>
.date-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.date-left,
.date-right {
  width: 20%;
  font-size: 24px;
}

.date-middle {
  width: 60%;

  &>p {
    display: inline;
    font-size: 24px;
  }
}
</style>