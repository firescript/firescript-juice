<template>
    <div class="antialiased overflow-x-hidden">

        <Loader></Loader>

        <div id="smooth-wrapper">
            <div id="smooth-content" >

                <nuxt />

            </div>
        </div>


    </div>
</template>

<script>


export default {
    name: 'DefaultWrapper',
    data() {
        return {
            currentSection: '',
            scrollProgress: 0
        }
    },
    head() {

    },
    computed: {

    },
    components: {

    },
    beforeMount() {

    },
    mounted() {

    },
    watch: {

    }
}

</script>