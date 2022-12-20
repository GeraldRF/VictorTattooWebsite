import { defineStore } from "pinia"
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

export const useAppDataStore = defineStore('appDataStore', () => {

    const { getCall } = useAxiosCall();
    
    const tattos = ref([{name: 'wander'}]);

    const settings = ref([]);

    const getSettings = () => {
        getCall('/settings').then(response => {
            console.log(response)
            settings.value = response.data ?? [];
        });
    }

    const getCategories = () => {
        getCall('/categories').then(response => {
            console.log(response)
        });
    }

    const getSetting = (slug) => {
        return settings.value?.find(setting => setting.slug === slug)
    }

    return {
        tattos,
        getSettings,
        getSetting,
        getCategories
    }


});