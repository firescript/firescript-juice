<template>
    <transition enter-active-class="opacity-0 duration-300 ease-out" enter-from-class="transform opacity-0"
        enter-to-class="opacity-100" leave-active-class="duration-1000 ease-in delay-500" leave-from-class="opacity-100"
        leave-to-class="transform opacity-0">
        <div v-if="appStore.isLoading" class="w-screen h-screen fixed top-0 left-0 z-[9999] bg-sintered-charcoal flex flex-col space-y-5 items-center justify-center">
            <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-t-sintered-green border-b-2 border-b-sintered-blue"></div>
            <span class="text-[10px] uppercase tracking-widest text-white opacity-20">BUILDING STONE...</span>
        </div>
    </transition>
</template>
<script setup>
    import { useAppStore } from '~/stores/appStore';
    const appStore = useAppStore();
</script>