<template>
    <section ref="newsletter" class="bbb container-fluid">
        <div class="block-heading" role="title">
            <h2 class="newletter-heading">thepodcastshow newsletter</h2>
            <p class="newletter-desc">
                Be the first to get updates about new episodes directly into your inbox.
            </p>

            <div class="subscribe" role="subscribe-link">
                <button aria-label="subscribe to newsletter">Subscribe to newsletter</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const newsletter = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

const timeline = $gsap.timeline({
    defaults: { duration: 0.85, ease: 'power2.out' },
    scrollTrigger: {
        trigger: 'bbb',
        start: '30% bottom',
    },
})

onMounted(() => {
    timeline.fromTo('.newletter-heading', { y: '-100%', opacity: 0 }, { y: 0, opacity: 1 })
    timeline.fromTo('.newletter-desc', { y: '-50%', opacity: 0 }, { y: 0, opacity: 1 }, '<')
    timeline.fromTo('.subscribe', { y: '-100%', opacity: 0 }, { y: 0, opacity: 1 })
})
</script>

<style lang="scss" scoped>
section {
    position: relative;
    @include spacer-y;
    @include grid;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1681635740104-66572c70ffcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
            center center no-repeat;
    background-size: cover;
    margin-block-start: 8rem;

    .block-heading {
        @include grid;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        max-width: 35rem;
        text-align: center;
        color: #f3f1f1;

        h2 {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 2.165rem;
            line-height: 1.2;
            margin-block: 0;
        }

        p {
            font-size: 1.25rem;
            line-height: 1.1;
        }
        .subscribe {
            button {
                position: relative;
                border: 0;
                color: $black;
                font-weight: 600;
                background: #f3f1f1;
                padding-inline: min(2.35rem, 5vw);
                padding-block: min(1rem, 5vw);
                box-shadow: inset 0 0 0 0 $secondary;
                // transition: all 0.6ms ease-out;
                -webkit-transition: ease-out 0.4s;
                -moz-transition: ease-out 0.4s;
                transition: ease-out 0.4s;

                &:hover {
                    box-shadow: inset 230px 0 0 $secondary;
                }
            }

            @keyframes slide-right {
                0% {
                    background: #f3f1f1;
                }
                100% {
                    background: #f3f1f1;
                }
            }
        }
    }

    @include mediaQuery('lg') {
        .block-heading {
            @include grid;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            max-width: 35rem;
            text-align: center;
            color: #f3f1f1;

            h2 {
                text-transform: uppercase;
                font-weight: 800;
                font-size: 3.65rem;
                line-height: 1.1;
                margin-block-end: 0;
            }

            p {
                font-size: 1.6rem;
                line-height: 1.1;
            }
            .subscribe {
                button {
                    border: 0;
                    color: $black;
                    background: #f3f1f1;
                    padding-inline: min(2.35rem, 5vw);
                    padding-block: min(1rem, 5vw);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
