<template>
    <div class="logo" role="logo text">
        <div class="icon" role="logo icon">T</div>
        <h5 aria-label="website name">thepodcastshow</h5>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
    flex: 0 0 30%;
    @include grid;
    align-items: center;
    gap: 0.35rem;
    .icon {
        @extend .logo;
        justify-content: center;
        height: 1.8rem;
        width: 1.8rem;
        font-size: 0.91rem;
        background: $primary;
        color: $white;
        border-radius: 50%;
        clip-path: circle(40%);
    }

    h5 {
        text-transform: uppercase;
        color: #2e2d2d;
        @include text-sm;
    }

    @include mediaQuery('lg') {
        flex: 0 1 auto;
        @include grid;
        align-items: center;
        .icon {
            max-width: 3rem;
            height: 2.25rem; // 1.8rem before
            width: 2.25rem; // 1.8rem before;
            font-size: 1rem;
            background: $primary;
            color: $white;
            border-radius: 50%;
            clip-path: circle(40%);
        }

        h5 {
            text-transform: uppercase;
            color: #2e2d2d;
            @include text-sm;
        }
    }
}
</style>
