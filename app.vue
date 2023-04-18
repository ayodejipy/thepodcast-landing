import NewReleases from './components/NewReleases.vue';

<template>
    <div>
        <TheHeader />
        <TopBanner />
        <NewReleases />
        <TheNewsletter />
        <TheFooter />
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font: 1.4rem/1.6 'Outfit', sans-serif;
    box-sizing: border-box;

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .container-fluid {
        @include container-fluid(5rem, 5rem);
    }
}
</style>
