import { defineStore } from "pinia"
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

const { getCall, postCall } = useAxiosCall();

export const useAppDataStore = defineStore('appDataStore', () => {

    
    const tattos = ref([{name: 'wander'}]);

    const settings = ref([]);
    const menu = ref([]);

    const getSettings = () => {
        getCall('/api/settings').then(response => {
            settings.value = response.data ?? [];
        });
    }

    const getInitialMenu = () => {
        getCall('/api/get-menu').then(response => {
            menu.value = response.data ?? [];
            console.log(menu.value)
        });
    }

    const getSetting = (slug) => {
        return settings.value?.find(setting => setting.slug === slug)
    }

    return {
        tattos,
        menu,
        getSettings,
        getSetting,
        getInitialMenu
    }


});