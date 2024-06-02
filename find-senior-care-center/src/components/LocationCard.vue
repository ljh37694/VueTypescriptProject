<template>
  <div class="location-card">
    <a :href="data.link ? data.link : 'https://www.naver.com'">{{ data.title }}</a>
    <p class="location-card-category">{{ data.category }}</p>
    <p>{{ data.address }}</p>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    data: Object,
  }
}
</script>

<style>
.location-card {
  padding: 20px;
  padding-left: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &>a,
  &>a:visited,
  &>a:link {
    font-size: 20px;
    color: #2db400;
  }
}

.location-card-category {
  color: #aaaaaa;
  font-size: 12px;
}
</style>