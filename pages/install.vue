<template>
    <div class="text-white bg-gradient-to-b from-white to-gray-100 min-h-screen pt-40">
        <div class="mx-auto max-w-6xl min-h-[4000px]">
            <div class=" flex justify-between space-x-10 ">

                <div class="flex flex-col items-start justify-center max-w-2xl space-y-5">
                    <h1 class=" text-5xl font-semibold text-gray-800" data-speed="1">Install.</h1>
                    <p class="text-lg text-gray-800 opacity-50" data-speed=".5">How to get started.</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { useAppStore } from '@/stores/appStore';
import { nextTick } from 'vue'

const { $PageSetup, $PageExit, $SetupScrollSmoother } = useNuxtApp()
const appStore = useAppStore();

onMounted(async () => {

    appStore.isPageMounted = true;

    $PageSetup(() => {
        console.log('Page Setup');
    });

});

onBeforeUnmount(() => {
    $PageExit();
});

</script>