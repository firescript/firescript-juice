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
<script>

import { SetupMixins } from '~/mixins/setup'

export default {
    mixins: [SetupMixins],
    mounted() {
        this.PageSetup(() => {

            this.SetupScrollSmoother().then((ss) => {
                console.log('Scroll Smoother Ready')
            });

        });
    },
}

</script>