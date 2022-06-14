<template>
  <div class="bg-black min-h-screen">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navbar from './components/header/Navbar.vue';

export default {
  name: "App",
  components: {
    Header, Navbar
  },
};
</script>

<style>
</style>
