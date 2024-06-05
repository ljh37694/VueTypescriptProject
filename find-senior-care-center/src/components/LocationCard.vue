<template>
  <div class="location-card" @click="setMapCenter(data)">
    <div class="location-card-title-container">
      <a :href="data.link ? data.link : 'https://www.naver.com'" class="location-card-title">
      </a>
      <label class="location-card-favorite-button" :class="{ 'favorite': isFavorite }"
        @click="isFavorite = !isFavorite">
        <font-awesome-icon :icon="['fas', 'star']" />
      </label>
    </div>
    <p class="location-card-category">{{ data.category }}</p>
    <p>{{ data.address }}</p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: "LocationCard",
  computed: {
    ...mapState(['searchData', 'map']),
  },
  data() {
    return {
      isFavorite: false,
    }
  },
  props: {
    data: Object,
  },
  methods: {
    ...mapMutations(['setMapCenter', 'setMap']),
    setLoctaionCardsTitle() {
      document.querySelectorAll('.location-card-title').forEach((item, idx) => {
        item.innerHTML = this.searchData[idx].title;
      });
    },
  },
  mounted() {
    this.setLoctaionCardsTitle();

    console.log(this.map);
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

.location-card-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-card-favorite-button {
  background-color: inherit;
  color: #aaaaaa;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
}

.favorite {
  color: rgb(255, 203, 31);
}

.location-card-title,
.location-card-title:visited,
.location-card-title:link {
  font-size: 20px;
  color: #2db400;
}

.location-card-category {
  color: #aaaaaa;
  font-size: 12px;
  margin-bottom: 20px;
}
</style>