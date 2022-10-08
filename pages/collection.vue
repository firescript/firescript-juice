<template>
    <div class="text-white bg-gradient-to-b from-sintered-blue to-sintered-charcoal min-h-screen pt-40">
        <div class="mx-auto max-w-6xl min-h-[4000px]">
            <div class=" flex justify-between space-x-10 ">

                <div class="flex flex-col items-start justify-center max-w-sm space-y-5">
                    <span class="uppercase text-sm text-white opacity-25">COUNTER TOPS, FLOORING AND WALL PANELING
                    </span>
                    <h1 class="uppercase text-6xl font-semibold text-white">Sintered Stone</h1>
                    <p class="text-lg text-white opacity-50">100% Natural material, can be directly used on the surface
                        of food-grade utensils, non toxic and non radiation.</p>
                </div>

                <div class="grid grid-cols-3 gap-5 w-full" data-speed=".9">
                    <div class="flex flex-col w-full h-[500px] bg-black bg-opacity-10">
                        <img src="~/assets/images/stone/strato-grigio.png" class="w-full" alt="">
                        <img src="~/assets/images/stone/strato-grigio-example.png" class="w-full object-cover" alt="">
                        <div
                            class="px-5 py-6 font-semibold bg-white text-sintered-charcoal uppercase text-center text-sm">
                            Strato Grigio
                        </div>
                    </div>
                    <div class="flex flex-col w-full h-[500px] bg-black bg-opacity-10">
                        <img src="~/assets/images/stone/sliver-grey.png" class="w-full" alt="">
                        <img src="~/assets/images/stone/sliver-grey-example.png" class="w-full object-cover" alt="">
                        <div
                            class="px-5 py-6 font-semibold bg-white text-sintered-charcoal uppercase text-center text-sm">
                            Sliver Grey
                        </div>
                    </div>
                    <div class="flex flex-col w-full h-[500px] bg-black bg-opacity-10">
                        <img src="~/assets/images/stone/bulgarian-grey.png" class="w-full" alt="">
                        <img src="~/assets/images/stone/bulgarian-grey-example.png" class="w-full object-cover" alt="">
                        <div
                            class="px-5 py-6 font-semibold bg-white text-sintered-charcoal uppercase text-center text-sm">
                            Bulgarian Grey
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { useAppStore } from '@/stores/appStore';

const { $PageSetup, $PageExit } = useNuxtApp()
const appStore = useAppStore();

onMounted(() => {

    appStore.isPageMounted = true;

    $PageSetup(() => {
        console.log('Page Setup');
    });

});

onBeforeUnmount(() => {
    $PageExit();
});

</script>