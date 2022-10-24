<template>
    <div class="text-gray-800 bg-gradient-to-b from-white to-gray-100 min-h-screen relative">
        <div class="mx-auto max-w-6xl overflow-hidden h-[5000px]">
            <div class=" flex justify-between space-x-10 min-h-screen items-center ">

                <div class="flex flex-col items-start justify-center max-w-2xl space-y-5">
                    <h1 class=" text-5xl font-semibold text-gray-800 tracking-tighter" ref="hiii" data-speed=".8">A better way to start building your next marketing website.</h1>
                    <p class="text-lg text-gray-800 opacity-50">Instantly leverage the power of Nuxt 3, smooth page loading, pre built menu overlay, beautiful page transitions, GSAP
                    pre loaded, built with tailwind, SEO best practices, Support for WP & Sanity as a CMS.</p>
                    <a href="https://github.com/firescript/firescript-juice/" target="_blank" class="font-semibold">Get Started</a>
                    <NuxtLink to="/install" class="font-semibold">Install</NuxtLink>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

export default{
    mounted(){

        this.$PageSetup(() => {



        });
    },
    beforeDestroy(){
        this.$store.commit('setLoading', true);
    }
}

</script>