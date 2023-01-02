import { defineStore } from "pinia";
import useAxiosCall from "@/composables/useAxiosCall";
import { ref } from "vue";

const { getCall, postCall } = useAxiosCall();

export const useAdminStore = defineStore('adminStore', () => {

    const token = ref(null);
    const user = ref(null);

    const loading = ref(false);

    const login = (email, password) => {
        return postCall('/login', { email, password });
    }
    const logout = (token) => {
        return getCall('/logout', token);
    }

    const updateSetting = (slug, value) => {
        return postCall('/api/settings/update', { slug, value }, token.value);  
    }

    const getLoginUser = (token) => {
        return getCall('/get-current-user', token);  
    }


    return {
        loading,
        user,
        login,
        logout,
        updateSetting,
        getLoginUser
    }
});