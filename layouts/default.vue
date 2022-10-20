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

    useHead({
        title: 'Nuxt 3 + Tailwind + GSAP + Scroll Smoother',
        // or, instead:
        // titleTemplate: (title) => `My App - ${title}`,
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: 'Nuxt 3 + Tailwind + GSAP + Scroll Smoother' }
        ],
        bodyAttrs: {
            class: 'bg-white'
        }
    })

    onMounted(() => {

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