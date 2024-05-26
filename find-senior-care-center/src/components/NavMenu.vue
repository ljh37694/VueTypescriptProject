<template>
  <ul>
    <li v-for="n in 6" :key="n" class="nav-menu">
      <button class="nav-menu-button">
        <font-awesome-icon icon="location-arrow" class="nav-menu-icon"/>
        <label>
          길찾기
        </label>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavMenu",
  computed: {

  },
  data() {
    return {
      menuButton: [
        {
          icon: ""
        }
      ]
    }
  },
}
</script>

<style>
.nav-menu {
  list-style: none;
  text-align: center;
  margin: 20px 0;
  padding: 10px 0;
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
  
  &>label {
    font-size: 16px;
    margin-top: 1em;
  }
}

.nav-menu-icon {
  font-size: 24px;
}
</style>