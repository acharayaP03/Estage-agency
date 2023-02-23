// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        define:{
            'process.env.DEBUG': false
        }
    },
    alias: {
        'class-validator': 'class-validator/cjs/index.js',
    },
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
            link:[
                { rel: "stylesheet" , href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"}
            ],
            script:[
                { src: "bootstrap/dist/js/bootstrap.bundle.min.js" }
            ]
        },
    },

})
