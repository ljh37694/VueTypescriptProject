<template>
  <p>{{ currentDate }}</p>
</template>

<script>
  export default {
    name: "DateHeader",
    data() {
      return {
        currentDate: new Date(),
      }
    }
  }
</script>