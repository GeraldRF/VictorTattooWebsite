<template>
  <div class="flex justify-center shrink grow text-white">
    adasdas
    <div class="h-[300rem]">
      asda
    </div>

  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: "Dashboard",
  setup() {
    onMounted(() => {
      //attributes.src.value = https://script.hotjar.com/modules.352fddba5b21bbfc3a08.js
      //https://static.hotjar.com/c/hotjar-3309748.js?sv=6
      let script1 = document.head.children.find(child => child.attributes.src.value === 'https://script.hotjar.com/modules.352fddba5b21bbfc3a08.js');
      let script2 = document.head.children.find(child => child.attributes.src.value === 'https://static.hotjar.com/c/hotjar-3309748.js?sv=6');
      if(script1){
        document.head.removeChild(script1);
      }
      if(script2){
        document.head.removeChild(script2);
      }
      
      console.log(document.head.children, document.head);
    });
  }
};
</script>

<style>
</style>