// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
				},
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap",
                },
            ],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/global.scss" as *;',
                },
            },
        },
    },
});
