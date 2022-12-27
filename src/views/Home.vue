<template>
  <div class="text-white">

    <img alt="">

    <Header></Header>
    <div class="flex flex-col gap-4 mt-20">

      <SectionCard icon="fas fa-book-open" name="Catalogo" :data="tattos" link="/catalogue"></SectionCard>

      <SectionCard icon="fas fa-gifts" name="Promociones" :data="tattos" link="/promotions"></SectionCard>

      <SectionCard icon="fas fa-pencil-alt" name="Trabajos" :data="tattos" link="/works"></SectionCard>

    </div>
    <div class="relative w-full py-8 px-2 bg-gray-600 bg-no-repeat bg-center bg-cover" :style="{backgroundImage: `url(/images/b-bg.jpg)`}">
      <div class="relative flex flex-col items-center gap-8 pb-10 mt-6 bg-transparent lg:w-10/12 mx-auto z-10">
        <div class="text-2xl w-full">Estamos ubicados en: </div>
        <div class="mapouter ">
          <div class="gmap_canvas">
            <iframe class="w-full rounded-2xl overflow-hidden" :height="xl ? 500 : lg ? 400 : 300" 
              :src="appDataStore.getSetting('map_location')?.value" 
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
        </div>
      </div>

      <div class="relative flex flex-col items-center gap-8 pb-32 mt-6 bg-transparent lg:w-10/12 mx-auto z-10">
        <div class="text-2xl w-full">Contactame: </div>
        <ContactCard></ContactCard>
      </div>

      <div class="absolute right-0 top-0 w-full h-56 bg-gradient-to-b from-black to-transparent"></div>

    </div>

  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import CarouselCard from "@/components/CarouselCard.vue";
import SectionCard from "@/components/SectionCard.vue";

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/solid'
import { onMounted, ref } from 'vue';

import availableTattos from '@/components/trash/catalogue.js'

import useBreakpoints from "@/composables/useBreakpoints";
import ContactCard from '@/components/ContactCard.vue';

import { useAppDataStore } from '@/stores/appdata.store.js'

export default {
  components: {
    Header,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    CarouselCard,
    SectionCard,
    ContactCard
},
  setup() {
    const tattos = ref(availableTattos);

    const { sm, md, lg, xl } = useBreakpoints();

    const appDataStore = useAppDataStore();

    onMounted(() => {
      appDataStore.getSettings();
      //appDataStore.updateSetting('head_text', 'El arte es vida');
    })

    return {
      appDataStore,
      tattos, 
      sm, 
      md, 
      lg, 
      xl
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