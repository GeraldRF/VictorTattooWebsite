<template>
  <div class="h-screen">
    <div :style="{backgroundImage: `url(${this.solo_url})`}"
      class="flex flex-col justify-end mx-auto h-screen w-full sm:gap-20 absolute top-0 z-0 bg-center bg-cover bg-no-repeat">
      <div class="flex justify-center items-center text-center text-7xl w-full text-white">
        <h1>The best quality in tattoos</h1>
      </div>

      <MainSection :data="tattos"></MainSection>

      <div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent" >
      </div>
    </div>
  </div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import availableTattos from '@/components/trash/catalogue.js'

import { ref } from "vue";

export default {
  name: "Header",
  components: {
    MainSection
  },
  setup() {
    const tattos = ref(availableTattos);

    const solo_url = ref("/images/bg.jpg");
    
    return {
      solo_url, tattos
    };
  },
};
</script>

<style>
</style>