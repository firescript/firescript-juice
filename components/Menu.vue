<template>
    <transition enter-active-class="transition-all ease-in transform-gpu duration-500   " enter-from-class="	opacity-0 "
        enter-to-class="opacity-100 	 " leave-active-class="transition-all transform-gpu duration-500  "
        leave-from-class="opacity-100 " leave-to-class=" opacity-0 ease-in">
        <div v-if="appStore.isMenuOpen"
            class="fixed z-50 w-screen h-screen top-0 left-0 bg-white bg-opacity-100  flex items-center justify-center px-10 ">
            <div class="absolute top-0 pt-7 max-w-6xl flex text-right w-full">
                <div class="ml-auto flex space-x-4 text-[12px] items-center   text-gray-800 transition-all duration-300 text-sm z-20  cursor-pointer "
                    @click="closeMenu()">
                    <span class="text-[12px]">Close</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </div>
            </div>
            <div
                class="flex flex-col space-y-0 text-gray-800 items-center md:items-end text-right z-20 max-w-2xl mx-auto w-full px-0 py-20">
                <NuxtLink to="/"
                    :class="(isSameRoute('/') ? 'opacity-40 cursor-default' : ' opacity-60 hover:opacity-100') + ' ' + animationClasses"
                    class="text-4xl lg:text-6xl font-inter tracking-tighter transform transition-all">Home</NuxtLink>
                <NuxtLink to="/install"
                    :class="(isSameRoute('/install') ? 'opacity-40 cursor-default' : ' opacity-60 hover:opacity-100') + ' ' + animationClasses"
                    class="text-4xl lg:text-6xl  tracking-tighter transform transition-all duration-300  overflow-hidden" >Install Juice</NuxtLink>

            </div>
        </div>
    </transition>
</template>

<script setup>

    // Stores
    import { useAppStore } from '@/stores/appStore';

    // Plugins
    const { $ScrollSmoother } = useNuxtApp()

    // Properties
    const appStore = useAppStore();
    const currentRoute = useRoute()

    // Methods
    const closeMenu = () => {
        appStore.isMenuOpen = false;
    }
    const isSameRoute = (route) => {
        return route === currentRoute.path
    }

    var animationClasses = "opacity-0 translate-y-0"

    onMounted(() => {
        document.onkeydown = (evt) => {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape) {
                closeMenu();
            }
        };
    })
    watch(
        () => currentRoute,
        (newRoute) => {
            console.log(newRoute, currentRoute.path)
            if (newRoute.path != currentRoute.path) {
                setTimeout(() => {
                    this.appStore.isMenuOpen = false;
                }, 250)
            }
        }
    )
    watch(
        () => appStore.isMenuOpen,
        async newVal => {
            var ss = $ScrollSmoother.get();
            if (newVal) {
                animationClasses = "translate-y-0 opacity-100"
                if (ss) {
                    ss.paused(true);
                }
            } else {
                animationClasses = "translate-y-10 opacity-0"
                if (ss) {
                    ss.paused(false);
                }
            }
        }
    )

</script>