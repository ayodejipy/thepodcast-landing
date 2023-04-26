import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap.registerPlugin(CSSRulePlugin)
    nuxtApp.vueApp.use(gsap)

    return {
        provide: {
            gsap,
        },
    }
})
