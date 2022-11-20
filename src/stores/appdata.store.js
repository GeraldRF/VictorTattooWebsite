import { defineStore } from "pinia"
import { ref } from "vue";

export const useAppDataStore = defineStore('appDataStore', () => {
    
    const tattos = ref([{name: 'wander'}]);


    return {
        tattos
    }


});