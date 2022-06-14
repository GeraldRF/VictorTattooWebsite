<template>
  <div class="h-screen">
    <div
      :style="`background-image: url(\'${this.solo_url}\')`"
      class="
        mx-auto
        h-screen
        w-full
        absolute
        top-0
        z-0
        bg-center bg-cover bg-no-repeat
        
        border-b-4
        border-opacity-5
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          text-center
          text-7xl
          h-full
          w-full
          text-white
        "
      >
        <h1>The best quality in tattoos</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      solo_url: "/images/tatuador.jpg",
    };
  },
};
</script>

<style>
</style>