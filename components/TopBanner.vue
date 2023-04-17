<template>
    <section class="container-fluid">
        <div class="banner__with-bg"></div>

        <div class="pdcast-summary">
            <div class="show-title">
                <h1>The Podcast Show</h1>
            </div>

            <div class="show-categories">
                <ul>
                    <li v-for="category in categories" class="category">
                        <a :href="'#' + category" class="nav-link">{{ category }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const categories = ref<string[]>(["hobbies", "passion", "slice of life", "casual talk", "business", "activity"]);
</script>

<style lang="scss" scoped>
section {
    position: relative;
    .banner__with-bg {
        width: 100%;
        height: 30rem;
        background: #987234;
    }

    .pdcast-summary {
        @include grid;
        align-items: center;
        justify-content: flex-end;
        padding-block-start: 3.236rem;
		padding-block-end: 1.5rem;

        .show-title {
            position: absolute;
            bottom: 0;
            left: 8%;
            width: 48rem;
			// transform: translateY(0%);
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
</style>
