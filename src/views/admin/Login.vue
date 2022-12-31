<template>
    <div class="flex flex-col gap-4 items-center justify-center h-full w-10/12 lg:w-3/12 mx-auto min-h-screen">
        <template v-if="adminStore.loading">
            <div class="flex flex-col items-center w-28 h-28">
                <img src="../../assets/loading.gif">
                <div class="text-black text-center">Comprobando credenciales</div>
            </div> 
        </template>
        <template v-else>
            <div class="text-3xl text-black pb-5">Inicio de sesión</div>
            <div class="flex flex-col items-start gap-2 w-full">
                <div class="text-black text-xl">
                    Email
                </div>
                
                <input class="px-2 py-3 rounded-xl w-full text-lg" v-model="email" type="email" placeholder="Ingrese su email" />
                
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <div class="text-black text-xl">
                    Contraseña
                </div>
                
                <input class="px-2 py-3 rounded-xl w-full text-lg" v-model="password" type="password" placeholder="Ingrese su contraseña" />
                
            </div>
            <div class="flex justify-end pt-4 w-full">
                <button class="w-full lg:w-auto text-xl text-black border-2 border-black hover:bg-gray-100 px-6 py-2 rounded-xl" @click.prevent="login">Ingresar</button>
            </div>
        </template>
        <div v-if="loginError" class="absolute bottom-0 flex justify-center items-center w-full h-28 px-6 text-lg lg:text-2xl bg-yellow-300 text-red-800">
            {{ loginError }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAdminStore } from '@/stores/admin.store.js';
import { autoResetRef } from '@vueuse/shared';
import { useRouter } from 'vue-router';

export default {
    setup(){

        const router = useRouter();

        const adminStore = useAdminStore();

        const email = ref('');
        const password = ref('');
        
        const loginError = autoResetRef(null, 3000);

        const login = () => {
            adminStore.loading = true;
            adminStore.login(email.value, password.value).then(response => {
                adminStore.token = response.data?.token;
                adminStore.user = response.data?.user;

                router.push({name: 'admin-dashboard'});
            }).catch(error => {
                if(error.response.status === 400){
                    loginError.value = error.response.data;
                } else {
                    loginError.value = 'Ha ocurrido un error inesperado.';
                }
            }).finally(() => adminStore.loading = false);
        }
        
        return {
            email,
            password,
            login,
            adminStore,
            loginError
        }

    }
}
</script>