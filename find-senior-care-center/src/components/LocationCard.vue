<template>
  <div class="location-card">
    <a :href="data.link ? data.link : 'https://www.naver.com'" class="location-card-title"></a>
    <p class="location-card-category">{{ data.category }}</p>
    <p>{{ data.address }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "LocationCard",
  computed: {
    ...mapState(['searchData']),
  },
  props: {
    data: Object,
  },
  methods: {
    setLoctaionCardsTitle() {
      document.querySelectorAll('.location-card-title').forEach((item, idx) => {
        item.innerHTML = this.searchData[idx].title;
      });
    }
  },
  mounted() {
    this.setLoctaionCardsTitle();
  },
  updated() {
    this.setLoctaionCardsTitle();
  },
}
</script>

<style>
.location-card {
  padding: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.location-card-title, .location-card-title:visited, .location-card-title:link {
  font-size: 20px;
  color: #2db400;
  display: inline;
}

.location-card-category {
  color: #aaaaaa;
  font-size: 12px;
  margin-bottom: 20px;
}
</style>