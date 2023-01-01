<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import Navbar from '@/components/header/Navbar.vue';
import { useAppDataStore } from '@/stores/appdata.store';
import { onMounted } from 'vue';

export default {
  components: {
    Navbar
  },
  setup(){
    const appDataStore = useAppDataStore();

    onMounted(() => {
        appDataStore.getMainStatus().then(response => {
            appDataStore.categories = response.data?.categories ?? [];
            appDataStore.settings = response.data?.settings ?? [];
            //console.log(response);
        }).catch(error => {
            console.log(error);
        });
    })
  }
};
</script>

<style>
</style>
