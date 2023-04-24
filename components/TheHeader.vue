<template>
    <header class="main-header container-fluid">
        <!-- logo -->
        <PartialsLogoIcon />

        <!-- toggle button -->
        <button
            type="button"
            class="toggle-menu"
            aria-label="hamburger menu"
            aria-describedby="open menu"
        >
            Menu
            
        </button>

        <!-- nav -->
        <div class="header-menu">
            <nav class="navigation">
                <ul>
                    <li><a href="#" class="nav-link">browse category</a></li>
                    <li><a href="#" class="nav-link">about</a></li>
                    <li><a href="#" class="nav-link">pricing</a></li>
                    <li><a href="#" class="nav-link">blog</a></li>
                </ul>
            </nav>

            <!-- action -->
            <div class="actions" role="click actions">
                <a href="#" class="nav-link" aria-label="login">login</a>
                <a href="#" class="nav-link" aria-label="signup">signup</a>
            </div>

            <div class="contact-info">
                <h5 aria-label="reach us">Reach us</h5>
                <p class="address" aria-label="address">
                    Ollenhauer Str. 28 Stuttgart Nord, Baden-Württemberg Germany
                </p>
                <a href="#" aria-label="contact email">hello@thepodcastshow</a>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
// const navigation = ref<string[]>([])
</script>

<style lang="scss" scoped>
.main-header {
    // &.container-fluid {
    //     background: greenyellow;
    // }

    @include grid;
    align-items: center;
    justify-content: space-between;

    .toggle-menu {
        flex: 0 0 25%;
    }

    .header-menu {
        // display: none;
        @include grid;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background: $white;
        position: fixed;
        width: 80%;
        height: 100%;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1000;
        // box-shadow: 0.25rem 0 2.065rem 0 rgba(0, 0, 0, 1);
        transform: translateX(100%);

        .navigation {
            width: 100%;
            display: block;
            padding-block-start: 6rem;
            padding-block-end: 2rem;
            margin-left: 0;
            border-bottom: 1px solid $gray-dark-2;

            ul {
                @include grid;
                flex-direction: column;
                position: relative;

                &::before {
                    display: none;
                    visibility: hidden;
                }

                li {
                    a {
                        padding: 0.25rem 1.75rem;
                        text-transform: capitalize;
                        letter-spacing: normal;
                        font-weight: 400;
                        color: #2e2d2d;
                        font-size: 1.355rem;

                        &:hover {
                            color: $gray-dark-1;
                        }
                    }
                }
            }
        }

        .actions {
            flex-grow: 1;
            width: 100%;
            @include grid;
            flex-direction: column;
            padding-block-start: 1.5rem;
            // gap: 1.75rem;

            a {
                padding: 0.25rem 1.75rem;
                text-transform: capitalize;
                letter-spacing: normal;
                font-weight: 400;
                color: #2e2d2d;
                font-size: 1.125rem;

                &:hover {
                    color: $gray-dark-1;
                }
            }
        }

        .contact-info {
            padding-block-end: 4.5rem;
            padding-inline: 1.3rem;
            h5 {
                margin-block: 0;
                font-weight: 400;
                font-size: 1.35rem;
            }
            p,
            a {
                font-size: 0.925rem;
            }
            p {
                margin-block: 0;
            }
            a {
                text-decoration: underline;
                color: #2e2d2d;

                &:hover {
                    color: $gray-dark-1;
                }
            }
        }
    }

    @include mediaQuery('lg') {
        // &.container-fluid {
        //     background: goldenrod;
        // }

        @include grid;
        align-items: center;
        justify-content: flex-start;
        height: 2.6rem;
        padding-block: 1.2rem;

        .toggle-menu {
            display: none;
        }

        .header-menu {
            flex-grow: 1;
            @include grid;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: $white;
            position: sticky;
            z-index: 1000;
            box-shadow: none;
            

            .navigation {
                @include grid;
                align-items: center;
                padding-block: 0;
                margin-left: 1.8rem;
                border-bottom: none;

                ul {
                    @include grid;
                    flex-direction: row;
                    align-items: center;
                    position: relative;

                    &::before {
                        content: '';
                        display: inline-block;
                        visibility: visible;
                        position: absolute;
                        inset: 0 auto;
                        width: 0.0825rem;
                        height: 1.45rem;
                        background: #d3d3d3;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    li {
                        display: inline-flex;
                        a {
                            padding: 0.25rem 1.75rem;
                            text-decoration: none;
                            text-transform: uppercase;
                            letter-spacing: 0.045rem;
                            font-weight: 500;
                            color: #2e2d2d;
                            @include text-sm;

                            &:hover {
                                color: $gray-dark-1;
                            }
                        }
                    }
                }
            }

            .actions {
                flex-grow: 0;
                width: auto;
                @include grid;
                flex-direction: row;
                padding-block-start: 0;
                // gap: 2rem;

                a {
                    padding: 0.25rem 1.2rem;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.045rem;
                    font-weight: 500;
                    color: #2e2d2d;
                    @include text-sm;

                    &:hover {
                        color: $gray-dark-1;
                    }
                }
            }

            .contact-info {
                display: none;
            }
        }
    }
}
</style>
