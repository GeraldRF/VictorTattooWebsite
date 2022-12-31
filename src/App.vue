<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import Navbar from '@/components/header/Navbar.vue';

export default {
  components: {
    Navbar
  },
};
</script>

<style>
</style>
