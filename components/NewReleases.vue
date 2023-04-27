<template>
    <section id="new-releases" ref="podcastSection" class="container-fluid">
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
            <PartialsPodcastCard
                v-for="podcast in latestPodcast"
                :key="podcast.title"
                :podcast="podcast"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { PodcastLists } from '~/utils/types'

const { $gsap } = useNuxtApp()
const podcastSection = ref<HTMLElement | null>(null)
const latestPodcast = ref<PodcastLists[]>([
    {
        title: 'The Intersection of Lifestyle and Business: Balancing Work and Play',
        author: 'Jonathan Doe',
        time: '24:05',
        cover_image:
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'How I really enjoy surfing and life on the beach',
        author: 'Jonathan Doe',
        time: '24:05',
        cover_image:
            'https://images.unsplash.com/photo-1610964029130-fed216b99544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    },
    {
        title: 'How to Turn Life Changes into Opportunities for Growth',
        author: 'Jonathan Doe',
        time: '24:05',
        cover_image:
            'https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'How Pursuing Your Passions Can Benefit Your Life',
        author: 'Jonathan Doe',
        time: '24:05',
        cover_image:
            'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    // {
    //     title: 'Building a Business Around Your Passion: Success Stories and Strategies',
    //     author: 'Jonathan Doe',
    //     time: '24:05',
    //     cover_image: '',
    // },
])

// set animation timeline
const timeline = $gsap.timeline({
    defaults: { duration: 0.85, ease: 'power2.out' },
    scrollTrigger: {
        trigger: podcastSection.value,
        start: '30% bottom',
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
