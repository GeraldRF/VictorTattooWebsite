import { defineStore } from "pinia"
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

const { getCall, postCall } = useAxiosCall();

export const useAppDataStore = defineStore('appDataStore', () => {

    
    const tattos = ref([{name: 'wander'}]);

    const settings = ref([]);

    const getSettings = () => {
        getCall('/api/settings').then(response => {
            console.log(response)
            settings.value = response.data ?? [];
        });
    }

    const getCategories = () => {
        getCall('/api/categories').then(response => {
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