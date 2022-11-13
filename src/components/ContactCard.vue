<template>
    <div class="flex gap-4 w-full">
        <form class="flex flex-col gap-5 items-end w-9/12 bg-white text-black rounded-xl shadow-2xl p-5"
            @submit="onSubmit">
            <div class="w-full font-bold text-xl">Dejame un mensaje</div>
            <div class="flex flex-col gap-5 justify-between w-full">
                <div class="flex gap-5 w-full">
                    <div class="flex flex-col gap-2 w-1/2">
                        <div class="font-normal">Nombre:</div>
                        <div>
                            <input class="w-full text-gray-500 outline-none" type="text"
                                placeholder="Ingresa tu nombre">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/2">
                        <div class="font-normal">Número telefónico:</div>
                        <div>
                            <input class="w-full text-gray-500 outline-none" type="text"
                                placeholder="Ingresa tu número de celular">
                        </div>
                    </div>
                </div>
                <div class="flex gap-5 w-full">
                    <div class="flex flex-col gap-2 w-1/2">
                        <div class="font-normal">Mensaje:</div>
                        <div>
                            <textarea rows="3" class="w-full text-gray-500 outline-none resize-none"
                                placeholder="Cual es tu mensaje?"></textarea>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 w-1/2">
                        <div class="font-normal">¿Quieres mostrarme una imagen?</div>

                        <label class="relative flex justify-center items-center p-3 text-center w-full h-20 border-2 border-dashed text-gray-400" for="upload_img"
                            @dragenter="prevent"
                            @dragend="prevent"
                            @dragexit="prevent"
                            @dragleave="prevent"
                            @dragover="prevent" 
                            @drag="onDragImg">
                            Insertala o arrastrala
                            <input class="w-full absolute hidden" id="upload_img" ref="upload_img" type="file" accept="image/*">
                        </label>

                    </div>
                </div>


            </div>
            <div>
                <input class="w-52 h-10 bg-blue-500 rounded-xl" type="submit">
            </div>
        </form>
        <div class="flex flex-col items-center w-3/12">
            <div class="text-center">Otras formas de contactarme</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {

        const upload_img = ref(null);

        const onSubmit = (e) => {
            e.preventDefault();

        }

        const prevent = (e) => {
            e.preventDefault();
            e.stopPropagation();

            if(e.type === 'dragover') upload_img.value.classList.add('border-blue-200')
            if(e.type === 'dragleave') {upload_img.value.classList.remove('border-blue-200'); console.log('dragleave')}
            if(e.type === 'dragend') {upload_img.value.classList.remove('border-blue-200'); console.log('dragend')}
            
        }
        const onDragImg = (e) => {
            console.log('draggin')
            upload_img.value.files = e.dataTransfer.files;
            
        }

        return { onSubmit, onDragImg, upload_img, prevent }

    }
}
</script>

<style>

</style>