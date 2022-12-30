<template>
  <div class="flex flex-col gap-4 items-center justify-center shrink grow">
    <div class="flex flex-col items-start gap-2">
        <div>
            Email
        </div>
        <div>
            <input v-model="email" type="email" placeholder="Ingrese su email" />
        </div>
    </div>
    <div class="flex flex-col items-start gap-2">
        <div>
            Contraseña
        </div>
        <div>
            <input v-model="password" type="text" placeholder="Ingrese su contraseña" />
        </div>
    </div>
    <div>
        <button class="text-white" @click.prevent="login">Ingresar</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAdminStore } from '@/stores/admin.store.js';

export default {
    setup(){

        const adminStore = useAdminStore();

        const email = ref('');
        const password = ref('');
        
        const login = () => {
            adminStore.login(email.value, password.value);
        }
        
        return {
            email,
            password,
            login
        }

    }
}
</script>