<template>
  <div class="text-white">
    <Header></Header>
    <div class="flex flex-col gap-4 home-element">
      <div>
        <div class="flex items-center justify-between md:justify-start md:gap-5">
          <h2 class="flex items-center ml-3 pr-10 text-2xl md:border-r-2 border-opacity-10">Catalogo</h2> <router-link to="/catalogue" class="mr-3 px-2 hover:text-gray-300">Ver catalogo completo</router-link>
        </div>     
        <div class="mx-auto py-2 w-11/12 relative">
          <flickity ref="catalogue" :options="flickityOptions">
            <div class="carousel-cell"><img src="@/assets/images/tatto1.jpg" class="shadow rounded-xl"></div>
            <div class="carousel-cell"><img src="@/assets/images/tatto2.jpg" class="shadow rounded-xl"></div>
            <div class="carousel-cell"><img src="@/assets/images/ta.jpg" class="shadow rounded-xl"></div>
            <div class="carousel-cell"><img src="@/assets/images/tatto4.jpg" class="shadow rounded-xl"></div>
            <div class="carousel-cell"><img src="@/assets/images/tatto5.jpg" class="shadow rounded-xl"></div>
          </flickity>
          <!-- if you don't want to use the buttons Flickity provides -->
          <button @click="previous('catalogue')" class="absolute left-0 top-1/2"> <ArrowCircleLeftIcon class="w-8 text-white"/> </button>
          <button @click="next('catalogue')" class="absolute right-0 top-1/2"> <ArrowCircleRightIcon class="w-8 text-white"/> </button>
        </div>
      </div>
      <div>
        <h2 class="ml-3 mb-3 text-2xl">Promociones</h2>
        <div class="mx-auto w-11/12 relative">
          <flickity ref="promos" :options="flickityOptions">
            <div class="carousel-cell">1</div>
            <div class="carousel-cell">2</div>
            <div class="carousel-cell">3</div>
            <div class="carousel-cell">4</div>
            <div class="carousel-cell">5</div>
          </flickity>
          <!-- if you don't want to use the buttons Flickity provides -->
          <button @click="previous('promos')" class="absolute left-0 top-1/2"> <ArrowCircleLeftIcon class="w-8 text-white"/> </button>
          <button @click="next('promos')" class="absolute right-0 top-1/2"> <ArrowCircleRightIcon class="w-8 text-white"/> </button>
        </div>
      </div>
      <div>
        <h2 class="ml-3 mb-3 text-2xl">Trabajos</h2>
        <div class="mx-auto w-11/12 relative">
          <flickity ref="works" :options="flickityOptions">
            <div class="carousel-cell">1</div>
            <div class="carousel-cell">2</div>
            <div class="carousel-cell">3</div>
            <div class="carousel-cell">4</div>
            <div class="carousel-cell">5</div>
          </flickity>
          <!-- if you don't want to use the buttons Flickity provides -->
          <button @click="previous('works')" class="absolute left-0 top-1/2"> <ArrowCircleLeftIcon class="w-8 text-white"/> </button>
          <button @click="next('works')" class="absolute right-0 top-1/2"> <ArrowCircleRightIcon class="w-8 text-white"/> </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Flickity from "vue-flickity";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/solid'

export default {
  name: "Home",
  components: {
    Header,
    Flickity,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      },
    };
  },
  methods: {
    next(why) {
      switch(why){
        case 'catalogue': {
          this.$refs.catalogue.next();
          break;
        }
        case 'promos': {
          this.$refs.promos.next();
          break;
        }
        case 'works': {
          this.$refs.works.next();
          break;
        }
      }
      
    },
    previous(why) {
      switch(why){
        case 'catalogue': {
        this.$refs.catalogue.previous();
          break;
        }
        case 'promos': {
          this.$refs.promos.previous();
          break;
        }
        case 'works': {
          this.$refs.works.previous();
          break;
        }
      }
    },
  },
};
</script>

<style>
</style>