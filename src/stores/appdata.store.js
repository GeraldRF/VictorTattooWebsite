import { defineStore } from "pinia"
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

export const useAppDataStore = defineStore('appDataStore', () => {

    const { getCall, postCall } = useAxiosCall();
    
    const tattos = ref([{name: 'wander'}]);

    const settings = ref([]);

    const getSettings = () => {
        getCall('/settings').then(response => {
            console.log(response)
            settings.value = response.data ?? [];
        });
    }

    const updateSetting = (slug, value) => {
        postCall('/settings/update', { slug, value }).then(response => {
            console.log(response)
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
        updateSetting,
        getCategories
    }


});