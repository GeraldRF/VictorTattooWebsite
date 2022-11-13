<template>
    <div class="flex flex-col md:flex-row gap-4 w-full">
        <form class="flex flex-col gap-5 items-end w-11/12 mx-auto md:w-9/12 bg-white text-black rounded-xl shadow-2xl p-5"
            @submit="onSubmit">
            <div class="w-full font-bold text-xl">Dejame un mensaje</div>
            <div class="flex flex-col gap-5 justify-between w-full">
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <div class="flex flex-col gap-2 w-full md:w-1/2">
                        <div class="font-normal">Nombre:</div>
                        <div>
                            <input class="w-full text-gray-500 outline-none" type="text"
                                placeholder="Ingresa tu nombre">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-full md:w-1/2">
                        <div class="font-normal">Número telefónico:</div>
                        <div>
                            <input class="w-full text-gray-500 outline-none" type="text"
                                placeholder="Ingresa tu número de celular">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <div class="flex flex-col gap-2 w-full md:w-1/2">
                        <div class="font-normal">Mensaje:</div>
                        <div>
                            <textarea rows="3" class="w-full text-gray-500 outline-none resize-none"
                                placeholder="Cual es tu mensaje?"></textarea>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 w-full md:w-1/2">
                        <div class="font-normal">¿Quieres mostrarme una imagen?</div>

                        <div class="relative">
                            <div v-if="uploadedImg" @click="removeImg" class="flex justify-center items-center absolute z-10 top-2 right-2 text-red-600 cursor-pointer w-4 h-4">
                                <i class="fas fa-trash"></i>
                            </div>
                            <label
                                class="relative flex justify-center items-center p-3 text-center overflow-hidden w-full h-20 border-2 border-dashed text-gray-400 cursor-pointer"
                                for="uploader_img" @dragleave="onDragLeave" @dragover="onDragOver" @drop="onDropImg"
                                @input="onUploadImg" ref="draggable">
                                <div>Insertala o arrastrala</div>
                                <input class="w-full absolute hidden" id="uploader_img" ref="uploader_img" type="file"
                                    accept="image/*">
                            </label>
                        </div>


                        <div v-if="filesInputErrorMessage != ''" class="text-sm text-red-400">
                            {{ filesInputErrorMessage }}
                        </div>

                    </div>
                </div>


            </div>
            <div>
                <input class="w-52 h-10 bg-blue-500 rounded-xl cursor-pointer" type="submit">
            </div>
        </form>
        <div class="flex flex-col items-center justify-center gap-5 w-10/12 mx-auto md:w-3/12">
            <div class="text-center text-xl">Otras formas de contactarme</div>
            <div class="flex flex-col sm:flex-row md:flex-col gap-4">
                <div class="flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-start cursor-pointer hover:text-blue-400"><i class="text-3xl fab fa-whatsapp-square"></i> Whatsapp</div>
                <div class="flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-start cursor-pointer hover:text-blue-400"><i class="text-3xl fab fa-facebook-square"></i> Facebook</div>
                <div class="flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-start cursor-pointer hover:text-blue-400"><i class="text-3xl fab fa-instagram-square"></i> Instagram</div>
                <div class="flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-start cursor-pointer hover:text-blue-400"><i class="text-3xl fas fa-share-alt-square"></i> Comparte este sitio</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { autoResetRef } from '@vueuse/core'

export default {
    setup() {

        const MAXIMO_BYTES_PERMITIDOS = 2000000;

        const uploader_img = ref(null);
        const draggable = ref(null);

        const uploadedImg = ref(false);

        const filesInputErrorMessage = autoResetRef('', 4000);

        const onSubmit = (e) => {
            e.preventDefault();

        }

        const onDragOver = (e) => {
            e.preventDefault();
            e.stopPropagation();

            draggable.value.classList.add('border-green-200');

        }

        const onDragLeave = (e) => {
            e.preventDefault();
            e.stopPropagation();

            draggable.value.classList.remove('border-green-200');
        }

        const onUploadImg = (e) => {
            e.preventDefault();
            if (!(uploader_img.value.files.length > 1)) {
                if (uploader_img.value.files[0]?.type.includes('image/')) {
                    if (!(uploader_img.value.files[0]?.size > MAXIMO_BYTES_PERMITIDOS)) {
                        draggable.value.firstChild.innerText = uploader_img.value.files[0].name;
                        draggable.value.firstChild.classList.add('text-green-400')
                        draggable.value.firstChild.classList.remove('text-gray-400')
                        draggable.value.classList.add('border-green-200');
                        uploadedImg.value = true;
                    } else {
                        uploader_img.value.value = '';

                        filesInputErrorMessage.value = 'Tamaño maximo permitido: 2 MB.'
                    }
                } else {
                    uploader_img.value.value = '';
                    filesInputErrorMessage.value = 'Solo puedes subir formato imagen.'
                }
            } else {
                uploader_img.value.value = '';
                filesInputErrorMessage.value = 'Solo puedes subir una imagen.'
            }

        }

        const onDropImg = (e) => {
            e.preventDefault();

            const files = e.dataTransfer.files;

            if (!(files.length > 1)) {
                if (files[0]?.type.includes('image/')) {
                    if (!(files[0]?.size > MAXIMO_BYTES_PERMITIDOS)) {
                        uploader_img.value.files = files;
                        draggable.value.firstChild.innerText = files[0]?.name;
                        draggable.value.firstChild.classList.add('text-green-400')
                        draggable.value.firstChild.classList.remove('text-gray-400')
                        uploadedImg.value = true;
                    } else {
                        filesInputErrorMessage.value = 'Tamaño maximo permitido: 2 MB.'
                    }
                } else {
                    filesInputErrorMessage.value = 'Solo puedes subir formato imagen.'
                }
            } else {
                filesInputErrorMessage.value = 'Solo puedes subir una imagen.'
            }
        }

        const removeImg = () => {
            uploader_img.value.value = '';
            draggable.value.firstChild.innerText = 'Insertala o arrastrala';
            draggable.value.firstChild.classList.remove('text-green-400');
            draggable.value.firstChild.classList.add('text-gray-400');
            draggable.value.classList.remove('border-green-200');

            uploadedImg.value = false;
        }

        return { onSubmit, onDropImg, uploader_img, draggable, onDragOver, onDragLeave, onUploadImg, filesInputErrorMessage, removeImg, uploadedImg }

    }
}
</script>

<style>

</style>