<template>
    <div class="podcast" role="contentwrapper" aria-label="single podcast container">
        <div class="podcast-img-cover" role="imgwrapper">
            <img :src="podcast.cover_image" :alt="podcast.title" role="img" />
            <div class="podcast-time" role="podcast time">{{ podcast.time }}</div>
        </div>

        <div class="podcast-meta" role="podcast-info">
            <h5>{{ podcast.title }}</h5>
            <p arial="author">{{ podcast.author }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PodcastLists } from '~/utils/types'

defineProps<{ podcast: PodcastLists }>()
</script>

<style lang="scss" scoped>
.podcast {
    flex: 1 1 45%;
    max-width: 50%;
    cursor: pointer;

    .podcast-img-cover {
        position: relative;
        height: 10.5rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .podcast-time {
            position: absolute;
            right: -1px;
            bottom: -1px;
            background: $white;
            width: 3.5rem;
            text-align: center;
            font-size: $text-sm;
        }
    }

    .podcast-meta {
        h5 {
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.2;
            margin-block: 0.8rem;
        }
        p {
            color: #bebebe;
            font-size: 0.85rem;
            text-transform: capitalize;
            margin-block: 0.65rem 0;
        }
    }

    @include mediaQuery('lg') {
        flex: 1 0 23.33%;
        max-width: 25%;
        transition: 0.9s ease-out;

        &:hover {
            transform: scale(0.95);
        }

        .podcast-img-cover {
            position: relative;
            height: 30rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .podcast-time {
                position: absolute;
                right: 0;
                bottom: 0;
                background: $white;
                width: 5rem;
                text-align: center;
                font-size: 1rem;
            }
        }

        .podcast-meta {
            h5 {
                font-size: 1.25rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }
}
</style>
