import { defineStore } from "pinia"
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

const { getCall, postCall } = useAxiosCall();

export const useAppDataStore = defineStore('appDataStore', () => {


    const settings = ref([]);
    const categories = ref([]);

    const getSettings = () => {
        getCall('/api/settings').then(response => {
            settings.value = response.data ?? [];
        });
    }

    const getMainStatus = () => {
        return getCall('/api/main-status');
    }

    const getSetting = (slug) => {
        return settings.value?.find(setting => setting.slug === slug)
    }

    return {
        categories,
        settings,
        getSettings,
        getSetting,
        getMainStatus,
        
    }


});