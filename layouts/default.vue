<template>
    <div class="">
        <Loader />
        <Menu />
        <Header />
        <main id="smooth-wrapper">
            <div id="smooth-content">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup>

    const { $SetupScrollSmoother } = useNuxtApp()

    useHead({
        title: 'Sintered Stone Co | Hamilton\'s Leading Sintered Stone Provider',
        // or, instead:
        // titleTemplate: (title) => `My App - ${title}`,
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: 'Sintered Stone Co | Hamilton\'s Leading Sintered Stone Provider' }
        ],
        bodyAttrs: {
            class: 'bg-white'
        }
    })

    onMounted(() => {
        console.log('Layout Mounted');
    });

</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>