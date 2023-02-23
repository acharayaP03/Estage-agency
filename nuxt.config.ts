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
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'},
                { rel: "stylesheet" , href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"},
            ],
        },
    },
    modules:[
        ['nuxt-swiper']
    ]

})
