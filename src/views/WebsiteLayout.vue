<template>
    <div class="flex flex-col bg-black text-white min-h-screen">
      <Navbar class="shrink-0 grow-0"></Navbar>
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
  
<script>
    import Navbar from '@/components/header/Navbar.vue';
    
    export default {
        components: {
            Navbar
        },
        setup(){
            
        }
    };
</script>
  
