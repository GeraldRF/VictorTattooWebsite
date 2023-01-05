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
      console.log(document.head.children, document.head);
    });
  }
};
</script>

<style>
</style>