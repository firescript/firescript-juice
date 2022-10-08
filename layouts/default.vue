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
        title: 'Sintered Stone Co | Hamilton\'s Leading Sintered Stone Provider',
        // or, instead:
        // titleTemplate: (title) => `My App - ${title}`,
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [
            { name: 'description', content: 'Sintered Stone Co | Hamilton\'s Leading Sintered Stone Provider' }
        ],
        bodyAttrs: {
            class: 'bg-sintered-charcoal'
        }
    })
</script>