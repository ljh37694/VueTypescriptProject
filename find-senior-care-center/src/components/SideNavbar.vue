<template>
  <header class="side-navbar">
    <h1 class="logo">
      <a href="https://naver.com">E</a>
    </h1>
    <nav class="side-nav">
      <NavMenu />
    </nav>
    <div class="side-navbar-footer">

    </div>
  </header>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: "SideNavbar",
  computed: {
  },
  components: {
    NavMenu,
  }
}
</script>

<style>
.side-navbar {
  position: relative;
  height: 100vh;
  width: 80px;
  height: 100%;
  top: 0px;
  left: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.logo {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgb(255, 203, 31);
  margin: 0;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.side-nav {
  flex-grow: 1;
}

.side-navbar-footer {
  height: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
</style>