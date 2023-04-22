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
