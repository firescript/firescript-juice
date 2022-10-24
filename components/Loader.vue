<template>
    <transition >
        <div v-if="isLoading" class="w-screen h-screen fixed top-0 left-0 z-[9999] bg-white flex flex-col space-y-5 items-center justify-center">
            <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-t-gray-200 border-b-2 border-b-white"></div>
            <span class="text-[10px] uppercase tracking-widest text-gray-800 opacity-20">LOADING...</span>
        </div>
    </transition>
</template>
<script>
export default{
    computed: {
        isLoading() {
            return this.$store.state.isLoading
        }
    }
}
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>