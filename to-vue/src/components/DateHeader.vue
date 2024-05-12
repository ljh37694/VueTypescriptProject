<template>
  <div class="date-header-container">
    <label>
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </label>
    <p>{{ currentDate }}</p>
    <label>
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </label>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  name: "DateHeader",
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['currentDate']),
  }
}
</script>

<style>
.date-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: blue;

  & > p {
    margin: 0 2em;
    font-size: 20px;
    width: 60%;
  }

  & > label {
    font-size: 25px;
    width: 20%;
  }
}
</style>