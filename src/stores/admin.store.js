import { defineStore } from "pinia";
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

const { getCall, postCall } = useAxiosCall();

export const useAdminStore = defineStore('adminStore', () => {

    const token = ref(null);

    const login = (email, password) => {
        postCall('/login', { email, password }).then(response => {
            token.value = response.data?.token;
        }).catch(error => {
            console.log(error);
        });
    }

    const updateSetting = (slug, value) => {
        postCall('/api/settings/update', { slug, value }, token.value).then(response => {
            console.log(response)
        });
    }


    return {
        login,
        updateSetting,
    }
});