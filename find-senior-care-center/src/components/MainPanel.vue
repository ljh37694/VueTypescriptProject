<template>
  <div class="main-panel" :class="{ 'close-panel': !isActivePanel }">
    <button id="close-button" @click="isActivePanel = !isActivePanel">
      <p>
        <font-awesome-icon v-if="isActivePanel === false" :icon="['fas', 'chevron-left']" />
        <font-awesome-icon v-else-if="isActivePanel === true" :icon="['fas', 'chevron-right']" />
      </p>
    </button>
    <form class="search-form">
      <button type="submit" @click="getSearchResult">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <input id="search-input" placeholder="장소를 검색하세요" />
    </form>

    <div class="panel-content">
      <div v-for="(data, idx) in searchData" :key="idx" class="location-card">
        <a :href="data.link ? data.link : 'https://www.naver.com'">{{ data.title }}</a>
        <p class="location-card-category">{{ data.category }}</p>
        <p>{{ data.address }}</p>
      </div>

      <p v-if="searchData.length == 0">검색결과가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: "MainPanel",
  computed: {
    ...mapState(['searchData']),
  },
  data() {
    return {
      isActivePanel: true,
    }
  },
  methods: {
    ...mapMutations(['setSearchData']),
    getSearchResult(e) {
      e.preventDefault();

      const keyword = document.getElementById('search-input').value;

      fetch("http://localhost:3000/search?query=" + keyword)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setSearchData(data.items);
        });

      console.log(keyword);
    },
  }
}
</script>

<style>
.main-panel {
  position: absolute;
  width: 500px;
  height: 100%;
  background-color: inherit;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 5px 0px 15px 0px;
  z-index: 2;
}

.search-form {
  color: rgb(255, 203, 31);
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
  border: 3px solid rgb(255, 203, 31);
  padding: 10px;
  width: 440px;
  margin-top: 20px;

  &>button {
    font-size: 24px;
    color: inherit;
    border: none;
    padding: 0 10px;
    background-color: inherit;
  }
}

#search-input {
  border: 0;
  appearance: none;
  outline: none;
  height: 32px;
  flex-grow: 1;
  background-color: inherit;
  font-size: 18px;
}

.panel-content {
  flex-grow: 1;
  width: 100%;
  margin-top: 20px;
}

#close-button {
  border-radius: 0 5px 5px 0;
  position: absolute;
  right: -20px;
  top: calc(50% - 25px);
  width: 20px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: inherit;
}

.close-panel {
  transform: translateX(-500px);
}

.location-card {
  padding: 20px;
  padding-left: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &>a, &>a:visited, &>a:link {
    font-size: 20px;
    color: #2db400;
  }
}

.location-card-category {
  color: #aaaaaa;
  font-size: 12px;
}
</style>