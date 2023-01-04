<template>
    <div class="flex flex-col bg-black text-white min-h-screen">
      <Navbar class="shrink-0 grow-0"></Navbar>
      <button @click="removeHotjat">Remove</button>
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
  
<script>
    import Navbar from '@/components/header/Navbar.vue';
import { onMounted } from '@vue/runtime-core';
    
    export default {
        components: {
            Navbar
        },
        setup(){
            let hotjar = document.createElement('script');
            hotjar.innerHTML = `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3309748,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `;
            document.head.appendChild(hotjar);

            console.log(document.head);

            const removeHotjat = () => {
                document.head.removeChild(hotjar);

                console.log(document.head); 
            }
            
            return removeHotjat
            
        }
    };
</script>
  
