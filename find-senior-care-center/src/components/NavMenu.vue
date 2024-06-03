<template>
  <ul>
    <li v-for="(data, idx) in menuButtonData" :key="idx" class="nav-menu" @click="changeActiveNavMenu(idx)">
      <button class="nav-menu-button" :class="{ 'active-nav-menu': activeNavMenu === idx }">
        <font-awesome-icon :icon="data.icon" shake class="nav-menu-icon" />
        <label>{{ data.text }}</label>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: "NavMenu",
  computed: {
    ...mapState(['activeNavMenu']),
  },
  data() {
    return {
      menuButtonData: [
        {
          icon: ['fas', 'location-arrow'],
          text: '찾기'
        },
        {
          icon: ['fas', 'circle-info'],
          text: '세부정보'
        },
        {
          icon: ['fas', 'star'],
          text: "즐겨찾기"
        },
      ],
    }
  },
  methods: {
    ...mapMutations(['changeActiveNavMenu']),
  }
}
</script>

<style>
.nav-menu {
  list-style: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-menu-button {
  background-color: inherit;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgb(65, 65, 65);
  width: 100%;
  padding: 20px 0;

  &>label {
    font-size: 16px;
    margin-top: 1em;
  }
}

.nav-menu-icon {
  font-size: 24px;
}

.active-nav-menu {
  color: #eee;
  background-color: rgb(255, 203, 31);
}
</style>