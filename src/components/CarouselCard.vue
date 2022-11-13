<template>
    <Carousel :items-to-show="xl ? 4 : lg ? 3 : md ? 2 : 1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="(value, index) in data" :key="'tattoo_' + index">
            <div class="relative w-60 h-60 bg-center bg-cover bg-no-repeat overflow-hidden rounded-xl group"
                :style="{ backgroundImage: `url(${value.image})` }">
                <div
                    class="hidden group-hover:flex flex-col items-start justify-center absolute top-0 left-0 w-full h-full p-4 bg-black bg-opacity-80">
                    <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Descripcion:</span>
                        Tatto hecho en barcelona</div>
                    <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Precio:</span> 20.000
                        colones</div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation class="text-white" />
            <Pagination class="mt-4" />
        </template>
    </Carousel>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import useBreakpoints from '@/composables/useBreakpoints';
import { watch } from 'vue';

export default {

    components: { Carousel, Slide, Pagination, Navigation },
    props: {
        data: {
            type: [Object, Array]
        }
    },
    setup() {
        const { sm, md, lg, xl } = useBreakpoints();

        return { sm, md, lg, xl }
    }


}
</script>

<style>
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    background-color: black;
}

.carousel__pagination-button {
    background-color: rgba(255, 255, 255, 0.246) !important;
}

.carousel__pagination-button--active {
    background-color: white !important;
}
</style>