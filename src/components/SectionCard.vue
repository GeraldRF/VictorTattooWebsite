<template>
    <div class="w-full px-3 lg:px-8">
        <div class="flex items-center justify-center gap-0">
            <div class="h-[0.1px] bg-gray-700 lg:w-5 grow shrink lg:grow-0 lg:shrink-0"></div>
            <h2 class="flex justify-center items-center px-4 text-2xl grow-0 shrink-0 border-[1px] border-gray-700 rounded-xl shadow-md shadow-gray-900">{{name}}
            </h2>
            <div class="h-[0.1px] bg-gray-700 grow shrink"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-5 mx-auto py-8">
           <template v-for="(tattoo, tattooIdx) in xl ? data : lg ? data.slice(0, 6) : data.slice(0, 4)" :key="tattooIdx+'_tatto'">
                <TattooCard :data="tattoo"></TattooCard>
           </template>
        </div>
        <div class="flex justify-end mb-16">
            <router-link :to="link" class="mr-3 px-3 py-1 text-blue-400 hover:text-white">Ver {{name.toLowerCase()}}</router-link>
        </div>
    </div>
</template>

<script>
import CarouselCard from "@/components/CarouselCard.vue";
import TattooCard from '@/components/TattooCard.vue';
import useBreakpoints from '@/composables/useBreakpoints.js'

export default {
    props: {
        data: {
            type: [Object, Array],
            required: true
        },
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    components: {
        CarouselCard,
        TattooCard
    },
    setup() {
        const { lg, xl } = useBreakpoints();

        return { lg, xl }
    }

}
</script>

<style>
</style>