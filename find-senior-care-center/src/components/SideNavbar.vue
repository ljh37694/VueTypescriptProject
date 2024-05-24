<template>
  <p>{{ count }}</p>
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