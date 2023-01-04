<template>
    <div class="flex min-h-screen">
        <div class="w-[20rem] max-h-screen bg-blue-900/20 shrink-0 grow-0 shadow-2xl">
            <Sidebar></Sidebar>
        </div>
        <div class="w-full max-h-screen shrink grow overflow-y-auto">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import { onMounted } from '@vue/runtime-core';
import { useAdminStore } from '@/stores/admin.store';
import { useRouter } from 'vue-router';
    
    export default {
        components: {
            Sidebar
        
        },
        setup(){

            const adminStore = useAdminStore();

            const router = useRouter();

            onMounted(() => {
                if(!adminStore.user){
                    if(localStorage.getItem('login_token')){
                        adminStore.getLoginUser(localStorage.getItem('login_token')).then(response => {
                            adminStore.user = response.data;
                        });
                    } else {
                        router.push({name: 'Login'});
                    }       
                }
            
            });
        }
    };
</script>