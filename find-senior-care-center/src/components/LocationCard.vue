<template>
  <div class="location-card">
    
      <p class="location-card-title">
        <a :href="data.link ? data.link : 'https://www.naver.com'"></a>
      </p>
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
  padding: 20px;
  padding-left: 35px;
  height: 200px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.location-card-category {
  color: #aaaaaa;
  font-size: 12px;
}

.location-card-title {
  font-size: 20px;
  color: #2db400;
  display: inline;
}
</style>