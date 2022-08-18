<template>
  <div class="text-white">
    <Header></Header>
    <div class="flex flex-col gap-4 home-element">
      <div>
        <div class="flex items-center justify-between md:justify-start md:gap-5">
          <h2 class="flex items-center ml-3 pr-10 text-2xl md:border-r-2 border-opacity-10">Catalogo</h2>
          <router-link to="/catalogue" class="mr-3 px-2 hover:text-gray-300">Ver catalogo completo</router-link>
        </div>
        <div class="mx-auto py-8 w-11/12 relative">
          <CarouselCard :data="tattos"></CarouselCard>
        </div>
      </div>
      <div>
        <h2 class="ml-3 mb-3 text-2xl">Promociones</h2>
        <div class="mx-auto w-11/12 relative">
          Carrousel
        </div>
      </div>
      <div>
        <h2 class="ml-3 mb-3 text-2xl">Trabajos</h2>
        <div class="mx-auto w-11/12 relative">
          Carrousel

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import CarouselCard from "@/components/CarouselCard.vue";

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';

import availableTattos from '@/components/trash/catalogue.js'



export default {
  components: {
    Header,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    CarouselCard
  },
  setup() {
    const tattos = ref(availableTattos);

    return {
      tattos
    }
  }
};
</script>

<style>
</style>