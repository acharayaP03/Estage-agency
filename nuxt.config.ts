// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        '/assets/css/main.scss'
    ],

    app:{
        head:{
            title: 'Estate Agency - Nuxt3',
            meta:[
                {
                    name: 'description',
                    content: 'Real estate web application using bootstrapMade template - EasteAgency'
                },
            ],
            script:[
                {
                    src: '/bootstrap.bundle.min.js'
                }
            ],
        },
    },
    
})
