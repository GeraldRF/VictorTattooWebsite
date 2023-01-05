<template>
    <div class="flex flex-col bg-black text-white min-h-screen">
      <Navbar class="shrink-0 grow-0"></Navbar>
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
  
<script>
    import Navbar from '@/components/header/Navbar.vue';
    import { onMounted } from '@vue/runtime-core';
    import { useAdminStore } from '@/stores/admin.store.js';
    
    export default {
        components: {
            Navbar
        },
        setup(){

            const adminStore = useAdminStore();
            
            if(!adminStore.hotjar){
                adminStore.hotjar = document.createElement('script');
                adminStore.hotjar.id = 'hotjarFunctionScript';
                adminStore.hotjar.innerHTML = `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3309748,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `;
                document.head.appendChild(adminStore.hotjar);
            }
        }
    };
</script>
  
