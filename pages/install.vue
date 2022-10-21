<template>
    <div class="text-white bg-gradient-to-b from-white to-gray-100 min-h-screen pt-40">
        <div class="mx-auto max-w-6xl min-h-[4000px]">
            <div class=" flex justify-between space-x-10 ">

                <div class="flex flex-col items-start justify-center max-w-2xl space-y-5">
                    <h1 class=" text-5xl font-semibold text-gray-800" ref="h1" data-speed=".8">Install.</h1>
                    <p class="text-lg text-gray-800 opacity-50" ref="p" >How to get started.</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { useAppStore } from '@/stores/appStore';
import { nextTick } from 'vue'

// Greensock
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";

import { ref, onMounted } from 'vue'

const h1 = ref();
const p = ref();

const { $PageSetup, $PageExit, $SetupScrollSmoother } = useNuxtApp()
const appStore = useAppStore();

if (process.client) {
    gsap.registerPlugin(ScrollSmoother);
}

onMounted(async () => {
    console.log('mounted')
    appStore.isPageMounted = true;

    $PageSetup(async () => {
        console.log('page setup')
        var ss = await $SetupScrollSmoother();
        // ss.effects(h1.value, { speed: .9 });
        // ss.effects(p.value, { speed: .5 });
        // window.dispatchEvent(new Event('resize'));
    });

});

onBeforeUnmount(() => {
    $PageExit();
});
</script>