<template>
    <div class="flex flex-col min-h-screen">
    
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
  
<script>
    
    export default {
        components: {
        
        },
    };
</script>