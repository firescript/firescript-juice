import * as sanityClient from '@sanity/client';

export default defineNuxtPlugin(nuxtApp => {

    const client = sanityClient({
        projectId: 'bv99sqdx',
        dataset: 'production',
        apiVersion: '2022-01-01', // use current UTC date - see "specifying API version"!
        token: '',
        useCdn: false, // `false` if you want to ensure fresh data
    })

    return {
        provide: {
            sanityClient: client
        }
    }

})