<template>
    <section class="container-fluid">
        <div class="banner__with-bg"></div>

        <div class="pdcast-summary">
            <div class="show-title">
                <h1>The Podcast Show</h1>
            </div>

            <div class="show-categories">
                <ul>
                    <li v-for="category in categories" :key="category" class="category">
                        <a :href="'#' + category" class="nav-link">{{ category }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const categories = ref<string[]>([
    'hobbies',
    'passion',
    'slice of life',
    'casual talk',
    'business',
    'activity',
])
</script>

<style lang="scss" scoped>
section {
    position: relative;
    &.container-fluid {
        padding-right: 0;
        padding-left: 0;
    }

    .banner__with-bg {
        width: 100%;
        height: 20rem;
        background: #987234;
        background: linear-gradient(
                rgba(255, 182, 10, 0.7),
                rgba(203, 139, 13, 0.5),
                rgba(200, 136, 13, 0.5)
            ),
            url('https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')
                center center no-repeat;
        background-size: cover;
        // animation: watefall 2s ease infinite;

        @keyframes watefall {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }

    .pdcast-summary {
        @include grid;
        align-items: center;
        justify-content: flex-start;
        padding-inline: 1rem;
        padding-block-start: 3.5rem;
        padding-block-end: 3.5rem;

        .show-title {
            position: absolute;
            bottom: 0;
            left: 4.6%;
            width: auto;
            transform: translateY(-112%);
            h1 {
                font-size: 4.35rem;
                line-height: 0.85em;
                letter-spacing: -0.25rem;
                font-weight: 800;
                text-transform: uppercase;
                margin-block: 0;
            }
        }

        .show-categories {
            margin-top: 4rem;
            max-width: 100%;
            width: 100%;

            ul {
                width: 100%;
                @include grid;
                flex-wrap: wrap;
                align-items: center;
                .category {
                    @include cell;

                    a {
                        color: $black;
                        font-size: 1.465rem;
                        text-transform: uppercase;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    @include mediaQuery('lg') {
        &.container-fluid {
            @include container-fluid(5rem, 5rem);
        }
        .banner__with-bg {
            height: 30rem;
        }

        .pdcast-summary {
            @include grid;
            align-items: center;
            justify-content: flex-end;
            padding-inline: 0;
            padding-block-start: 3.236rem;
            padding-block-end: 1.5rem;

            .show-title {
                position: absolute;
                bottom: 0;
                left: 8%;
                width: 48rem;
                transform: translateY(0%);
                h1 {
                    font-size: 9.45rem;
                    line-height: 0.85em;
                    letter-spacing: -0.25rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-block: 0;
                }
            }

            .show-categories {
                margin-top: 0;
                max-width: 100%;
                width: 25rem;
                align-self: flex-end;

                ul {
                    width: 100%;
                    @include grid;
                    flex-wrap: wrap;
                    align-items: center;
                    .category {
                        @include cell;

                        a {
                            color: $black;
                            font-size: 1.465rem;
                            text-transform: uppercase;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }
}
</style>
