<template>
    <Carousel @mousedown="mouseGrab" @mouseup="mouseGrab('hover')" :class="mouseAction" class="!bg-transparent"
        :items-to-show="xl ? 3 : lg ? 3 : md ? 2 : 1" :autoplay="3000" :wrap-around="true"
        :pause-autoplay-on-hover="true" snap-align="center">
        <Slide v-for="(value, index) in data" :key="'tattoo_' + index">
            <div class="relative w-60 h-60 bg-center bg-cover bg-no-repeat overflow-hidden rounded-xl group shadow-md shadow-black"
                :style="{ backgroundImage: `url(${value.image})` }">
                <!-- <div
                    class="hidden group-hover:flex flex-col items-start justify-center absolute top-0 left-0 w-full h-full p-4 bg-black bg-opacity-80">
                    <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Descripcion:</span>
                        Tatto hecho en barcelona</div>
                    <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Precio:</span> 20.000
                        colones</div>
                </div> -->
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
import { ref, watch } from 'vue';

export default {

    components: { Carousel, Slide, Pagination, Navigation },
    props: {
        data: {
            type: [Object, Array]
        }
    },
    setup() {
        const { sm, md, lg, xl } = useBreakpoints();

        const mouseAction = ref('cursor-grab');

        const mouseGrab = (action) => {
            if (action === 'hover') {
                mouseAction.value = 'cursor-grab';
            }
            else {
                mouseAction.value = 'cursor-grabbing'
            }
        }

        return { sm, md, lg, xl, mouseGrab, mouseAction }
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

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>