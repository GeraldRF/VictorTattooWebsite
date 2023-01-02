<template>
  <div class="w-full h-full">
    <div class="flex justify-center items-end gap-2 w-full bg-gray-400 text-white text-3xl py-4">
        VINK <span class="text-2xl font-extralight">AdminPane</span> 
    </div>
    <div class="w-full text-center py-2 border-b-2">Bienvenido {{adminStore.user?.name}}!</div>
    <div class="flex flex-col w-full py-3">
        
        <router-link class="hover:bg-white px-4 py-3" to="#">Productos</router-link>
        <router-link class="hover:bg-white px-4 py-3" to="#">Categorias</router-link>
        <router-link class="hover:bg-white px-4 py-3" to="#">Interfaz</router-link>
        
        <div class="flex justify-center">
            <button class="hover:bg-white px-4 py-3" @click="logout">Cerrar sesión</button>
        </div>
        
        
    </div>
  </div>
</template>

<script>

import { useAdminStore } from '@/stores/admin.store.js'
import { useRouter } from 'vue-router';

export default {
    setup(){
        const adminStore = useAdminStore();
        const router = useRouter();

        const logout = () => {
            adminStore.logout(localStorage.getItem('login_token')).then(() => {
                localStorage.removeItem('login_token');
                router.push({name: 'Login'});
            });
        }

        return {
            adminStore,
            logout
        }
    }
}
</script>