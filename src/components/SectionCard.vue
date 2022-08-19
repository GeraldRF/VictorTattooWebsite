<template>
    <div>
        <div class="flex items-center justify-center gap-0 px-4 lg:px-8">
            <div class="h-[0.1px] bg-gray-700 lg:w-5 grow shrink lg:grow-0 lg:shrink-0"></div>
            <h2 class="flex justify-center items-center px-4 text-2xl grow-0 shrink-0 border-[1px] border-gray-700 rounded-xl shadow-md shadow-gray-900">{{name}}
            </h2>
            <div class="h-[0.1px] bg-gray-700 grow shrink"></div>
        </div>
        <div class="mx-auto py-8 w-11/12 relative">
            <CarouselCard :data="data"></CarouselCard>
        </div>
        <div class="flex justify-end px-3 lg:px-8 mb-16">
            <router-link :to="routerLink" class="mr-3 px-3 py-1 border-2 rounded-3xl hover:text-gray-300">Ver {{name}}</router-link>
        </div>
    </div>
</template>

<script>
import CarouselCard from "@/components/CarouselCard.vue";

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
        routerLink: {
            type: String,
            required: true
        }
    },
    components: {
        CarouselCard
    }

}
</script>

<style>
</style>