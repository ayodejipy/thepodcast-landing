<template>
    <section id="newsletter" class="container-fluid">
        <div class="block-heading" role="title">
            <h2>thepodcastshow newsletter</h2>
            <p>Be the first to get updates about new episodes directly into your inbox.</p>

            <div class="subscribe" role="subscribe-link">
                <button aria-label="subscribe to newsletter">Subscribe to newsletter</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

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
                border: 0;
                color: $black;
                font-weight: 600;
                background: #f3f1f1;
                padding-inline: min(2.35rem, 5vw);
                padding-block: min(1rem, 5vw);
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
