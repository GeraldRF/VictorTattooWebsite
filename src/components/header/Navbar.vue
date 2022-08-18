<template>
  <div class="w-full h-16">
    <div class="h-16 w-full"></div>
    <nav class="p-2 flex w-full h-16 items-center justify-between md:justify-start text-white bg-black bg-opacity-60 shadow-lg z-10 fixed top-0">
      <div class="p-2 text-3xl text-white">
        <router-link to="/" class="flex items-center">ElBatoTattoo</router-link>
      </div>

      <div ref="closeSide" class="hidden md:hidden w-2/12 sm:4/12 fixed top-0 left-0 h-screen "></div>

      <ul
        class="w-10/12 hidden sm:8/12 md:w-full h-screen fixed top-0 right-0 pt-20 md:pt-0 shadow-md text-lg md:shadow-none md:relative md:mt-0 md:flex flex-col md:flex-row md:h-auto gap-5 md:gap-3 items-center text-center md:justify-end z-10 bg-black md:bg-transparent"
        ref="menu">
        <li class="md:hidden">
          <button class="flex md:hidden absolute right-3 top-3 z-10 text-white hover:text-gray-300 rounded"
            ref="closeMenu">
            <XIcon class="w-10"></XIcon>
          </button>
        </li>
        <li>
          <router-link to="/catalogue" class="pb-1 border-b-2 border-transparent hover:border-white">Catalogo
          </router-link>
        </li>
        <li>
          <router-link to="/promotions" class="pb-1 border-b-2 border-transparent hover:border-white">Promociones
          </router-link>
        </li>
        <li>
          <router-link to="/works" class="pb-1 border-b-2 border-transparent hover:border-white">Trabajos</router-link>
        </li>
        <li>
          <router-link to="/contact" class="pb-1 border-b-2 border-transparent hover:border-white">Contacto
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="pb-1 border-b-2 border-transparent hover:border-white">Acerca de</router-link>
        </li>
      </ul>

      <div class="flex md:mr-3">
        <button class="flex md:hidden text-white hover:text-gray-300 rounded" ref="openMenu">
          <MenuIcon class="w-10"></MenuIcon>
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
import { onMounted, ref } from 'vue';

export default {
  components: {
    MenuIcon,
    XIcon,
  },
  setup() {
    const menu = ref("");
    const openMenu = ref("");
    const closeMenu = ref("");
    const closeSide = ref("");

    onMounted(() => {
      openMenu.value.addEventListener("click", function () {
        
        menu.value.classList.add("flex");
        menu.value.classList.remove("hidden");
        menu.value.classList.add("showMenu");
        closeSide.value.classList.add("block");
        closeSide.value.classList.remove("hidden");

        closeMenu.value.addEventListener("click", function () {
          closeSide.value.classList.add("hidden");
          closeSide.value.classList.remove("block");
          menu.value.classList.remove("showMenu");
          menu.value.classList.add("closeMenu");
          setTimeout(() => {
            menu.value.classList.add("hidden");
            menu.value.classList.remove("flex");
            menu.value.classList.remove("closeMenu");
          }, 450);
        });
        closeSide.value.addEventListener("click", function () {
          closeSide.value.classList.add("hidden");
          closeSide.value.classList.remove("block");
          menu.value.classList.remove("showMenu");
          menu.value.classList.add("closeMenu");
          setTimeout(() => {
            menu.value.classList.add("hidden");
            menu.value.classList.remove("flex");
            menu.value.classList.remove("closeMenu");
          }, 450);
        });
      });

      });

      return { menu, openMenu, closeMenu, closeSide }
    }
}
</script>

<style>
</style>