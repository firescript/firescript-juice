<template>
    <nav class=" bg-sintered-blue bg-opacity-80 backdrop-blur-md py-5 w-full fixed  top-0 z-20">
        <div class="max-w-6xl mx-auto flex justify-between">
            <NuxtLink to="/" class="max-w-6xl  text-white flex justify-between items-center">
                <img src="~/assets/svg/logoo.svg" class="max-h-[35px]" alt="Sintered Stone Co">
            </NuxtLink>
            <MenuButton />
        </div>
    </nav>
</template>
<script setup>
import { useAppStore } from '@/stores/appStore';
import MenuButton from './MenuButton.vue';
const appStore = useAppStore();
const openMenu = () => {
    appStore.isMenuOpen = true;
}
</script>