<template>
    <div class="logo" role="logo text">
        <div class="icon" role="logo icon">T</div>
        <h5 aria-label="website name">thepodcastshow</h5>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
    @include grid;
    align-items: center;
    gap: 0.6rem;
    .icon {
        @extend .logo;
        justify-content: center;
        height: 1.8rem;
        width: 1.8rem;
        font-size: 1rem;
        background: $primary;
        color: $white;
        border-radius: 50%;
    }

    h5 {
        text-transform: uppercase;
        color: #2e2d2d;
        @include text-sm;
    }
}
</style>
