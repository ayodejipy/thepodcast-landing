<template>
    <div>
        <TheHeader />
        <TopBanner />
        <NewReleases />
        <TheNewsletter />
        <TheFooter />
    </div>
</template>

<script lang="ts" setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Thepodcastshow` : 'Thepodcastshow'
    },
})
</script>

<style lang="scss">
:root {
    --color: green;
    --scale-x: 0;
    --left: 0;
}

body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font: 1.4rem/1.6 'Outfit', sans-serif;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.container-fluid {
    @include container-fluid(0.5rem, 0.5rem);

    @include mediaQuery('lg') {
        @include container-fluid(5rem, 5rem);
    }
}
</style>
