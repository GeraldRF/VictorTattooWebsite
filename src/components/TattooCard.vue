<template>
    <div class="relative w-full h-80 bg-center bg-cover bg-no-repeat overflow-hidden rounded-xl group cursor-pointer"
        :style="{ backgroundImage: `url(${data.image})` }">
        <div
            class="hidden group-hover:flex flex-col items-start justify-center absolute top-0 left-0 w-full h-full p-4 bg-black bg-opacity-80">
            <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Descripcion:</span>
                Tatto hecho en barcelona</div>
            <div class="text-gray-400 font-bold"> <span class="text-gray-300 font-light">Precio:</span> 20.000
                colones</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style>

</style>