<template>
  <header class="side-navbar">
    <h1 class="logo">
      <a href="https://naver.com">E</a>
    </h1>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "SideNavbar",
  computed: {
    ...mapState(['count']),
  }
}
</script>

<style>
.side-navbar {
  position: relative;
  height: 100vh;
  width: 65px;
  height: 100%;
  top: 0px;
  left: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
}

.logo {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgb(255, 225, 31);
  margin: 0;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>