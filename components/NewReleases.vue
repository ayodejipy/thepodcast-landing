<template>
    <section id="new-releases" class="container-fluid">
        <div class="block-heading" role="title">
            <h2 data-beforecontent="Release">New Release</h2>

            <div class="view-all-link" role="link-wrapper">
                <a href="#" aria-label="all new releases">See All New Release</a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="arrow-right"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                </svg>
            </div>
        </div>

        <div class="podcasts-list" role="list-recent-podcasts">
            <PartialsPodcastCard v-for="n in 4" :key="n" />
        </div>
    </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

// set animation timeline
const timeline = $gsap.timeline({
    defaults: { duration: 0.85, ease: 'power2.out' },
    scrollTrigger: {
        trigger: '#new-releases',
        start: '35% bottom',
        markers: true,
    },
})

onMounted(() => {
    timeline.fromTo('html', { '--left': 0 }, { '--left': '-5.8%' })
})
</script>

<style lang="scss" scoped>
section {
    position: relative;
    @include spacer-y;

    .block-heading {
        @include grid;
        align-items: center;
        justify-content: space-between;
        position: relative;

        h2 {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 1.545rem;

            &::before {
                content: attr(data-beforecontent);
                font-size: 4.13rem;
                color: #e9e9e9;
                position: absolute;
                inset-inline: 0;
                top: -50%;
                left: -5.8%;
                z-index: -1;
                transform: translateY(25%);
            }
        }

        .view-all-link {
            @include grid;
            align-items: center;
            gap: 0.75rem;
            display: none;

            a {
                text-transform: capitalize;
                color: $black;

                &:hover .arrow-right {
                    transform: translateX(50%);
                }
            }

            .arrow-right {
                width: 1.365rem;
                transition: all 2ms ease-out;
            }
        }
    }

    .podcasts-list {
        @include grid;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.75rem;
        padding-top: 2rem;
    }

    @include mediaQuery('lg') {
        position: relative;
        @include spacer-y;
        .block-heading {
            @include grid;
            align-items: center;
            justify-content: space-between;
            position: relative;

            h2 {
                text-transform: uppercase;
                font-weight: 800;
                font-size: 2.345rem;

                &::before {
                    content: attr(data-beforecontent);
                    font-size: 7.13rem;
                    color: #e9e9e9;
                    position: absolute;
                    inset-inline: 0;
                    top: -50%;
                    left: var(--left); // -5.8%
                    z-index: -1;
                    transform: translateY(16%);
                }
            }

            .view-all-link {
                @include grid;
                align-items: center;
                gap: 0.75rem;

                a {
                    text-transform: capitalize;
                    color: $black;

                    &:hover .arrow-right {
                        transform: translateX(50%);
                    }
                }

                .arrow-right {
                    width: 1.365rem;
                    transition: all 2ms ease-out;
                }
            }
        }
    }
}
</style>
