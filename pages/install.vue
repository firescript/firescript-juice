<template>
    <div class="text-white bg-gradient-to-b from-white to-gray-100 min-h-screen pt-40">
        <div class="mx-auto max-w-6xl min-h-[4000px]">
            <div class=" flex justify-between space-x-10 ">

                <div class="flex flex-col items-start justify-center max-w-2xl space-y-5">
                    <h1 class=" text-5xl font-semibold text-gray-800" ref="h1" data-speed="">Install.</h1>
                    <p class="text-lg text-gray-800 opacity-50" ref="p" >How to get started.</p>
                    <NuxtLink to="/" class="font-semibold text-black" >Home AY</NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        this.$PageSetup(() => {



        });
    },
    beforeDestroy() {
        this.$PageExit();
    }
}

</script>