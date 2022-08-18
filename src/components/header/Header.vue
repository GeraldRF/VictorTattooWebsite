<template>
  <div class="h-screen">
    <div :style="{backgroundImage: `url(${this.solo_url})`}"
      class="mx-auto h-screen w-full absolute top-0 z-0 bg-center bg-cover bg-no-repeat">
      <div class="flex justify-center items-center text-center text-7xl h-full w-full text-white">
        <h1>The best quality in tattoos</h1>
      </div>
      <div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      solo_url: "/images/bg.jpg",
    };
  },
};
</script>

<style>
</style>