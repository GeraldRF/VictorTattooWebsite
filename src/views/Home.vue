<template>
  <div class="text-white">
    <Header></Header>
    <div class="flex flex-col gap-4 mt-20">
      <div>
        <div class="flex items-center justify-center gap-0 px-4 lg:px-8">
          <div class="h-px bg-white lg:w-5 grow shrink lg:grow-0 lg:shrink-0"></div>
          <h2 class="flex justify-center items-center px-4 text-2xl grow-0 shrink-0 border-x-2 rounded-xl">Catalogo
          </h2>
          <div class="h-px bg-white grow shrink"></div>
        </div>
        <div class="mx-auto py-8 w-11/12 relative">
          <CarouselCard :data="tattos"></CarouselCard>
        </div>
        <div class="flex justify-end px-3 lg:px-8 mb-16">
          <router-link to="/catalogue" class="mr-3 px-3 py-1 border-2 rounded-3xl hover:text-gray-300">Ver catalogo
            completo</router-link>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-center gap-3 px-4 lg:px-8">
          <div class="h-px bg-white lg:w-5 grow shrink lg:grow-0 lg:shrink-0"></div>
          <h2 class="flex justify-center items-center  text-2xl grow-0 shrink-0">Promociones</h2>
          <div class="h-px bg-white grow shrink"></div>
        </div>
        <div class="mx-auto py-8 w-11/12 relative">
          <CarouselCard :data="tattos"></CarouselCard>
        </div>
        <div class="flex justify-end px-3 lg:px-8 mb-16">
          <router-link to="/catalogue" class="mr-3 px-3 py-1 border-2 rounded-3xl hover:text-gray-300">Todas las promos
          </router-link>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-center gap-0 px-4 lg:px-8">
          <div class="h-px bg-white lg:w-5 grow shrink lg:grow-0 lg:shrink-0"></div>
          <h2 class="flex justify-center items-center px-4 text-2xl grow-0 shrink-0 border-x-2">Trabajos
          </h2>
          <div class="h-px bg-white grow shrink"></div>
        </div>
        <div class="mx-auto py-8 w-11/12 relative">
          <CarouselCard :data="tattos"></CarouselCard>
        </div>
        <div class="flex justify-end px-3 lg:px-8 mb-16">
          <router-link to="/catalogue" class="mr-3 px-3 py-1 border-2 rounded-3xl hover:text-gray-300">Todos mis
            trabajos</router-link>
        </div>
      </div>

    </div>

    <div class="relative w-full py-8 px-2 bg-gray-600 bg-no-repeat bg-center bg-cover" :style="{backgroundImage: `url(/images/b-bg.jpg)`}">
      <div class="relative flex flex-col items-center gap-8 pb-10 mt-6 bg-transparent lg:w-10/12 mx-auto z-10">
        <div class="text-2xl w-full">Estamos ubicados en: </div>
        <div class="mapouter ">
          <div class="gmap_canvas"><iframe class="w-full rounded-2xl overflow-hidden" :height="xl ? 500 : lg ? 400 : 300" id="gmap_canvas"
              src="https://maps.google.com/maps?q=10.623600,%20-85.440684&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe><a href="https://123movies-to.org"></a><br>
            <a class="hidden" href="https://www.embedgooglemap.net">embed code google maps</a>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col items-center gap-8 pb-32 mt-6 bg-transparent lg:w-10/12 mx-auto z-10">
        <div class="text-2xl w-full">Contactame: </div>

      </div>

      <div class="absolute right-0 top-0 w-full h-56 bg-gradient-to-b from-black to-transparent"></div>

    </div>

  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import CarouselCard from "@/components/CarouselCard.vue";

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';

import availableTattos from '@/components/trash/catalogue.js'

import useBreakpoints from "@/composables/useBreakpoints";



export default {
  components: {
    Header,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    CarouselCard
  },
  setup() {
    const tattos = ref(availableTattos);

    const { sm, md, lg, xl } = useBreakpoints();

    return {
      tattos, sm, md, lg, xl
    }
  }
};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: max-content;
  width: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>