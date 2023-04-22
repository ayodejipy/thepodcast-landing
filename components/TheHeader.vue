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
        </div>
    </header>
</template>

<script lang="ts" setup>
// const navigation = ref<string[]>([])
</script>

<style lang="scss" scoped>
.main-header {
    &.container-fluid {
        background: greenyellow;
    }

    @include grid;
    align-items: center;
    justify-content: space-between;

    .toggle-menu {
        flex: 0 0 25%;
    }

    .header-menu {
        display: none;
        // @include grid;
        align-items: center;
        justify-content: space-between;

        .navigation {
            display: block;
            margin-left: 1.8rem;

            ul {
                @include grid;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    inset: 0 auto;
                    width: 0.0825rem;
                    height: 1.45rem;
                    background: #d3d3d3;
                    top: 50%;
                    transform: translateY(-50%);
                }

                li {
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
            @include grid;
            gap: 1.75rem;

            a {
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

    @include mediaQuery('lg') {
        &.container-fluid {
            background: goldenrod;
        }

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
            align-items: center;
            justify-content: space-between;

            .navigation {
                @include grid;
                align-items: center;
                margin-left: 1.8rem;

                ul {
                    @include grid;
                    align-items: center;
                    position: relative;

                    &::before {
                        content: '';
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
                @include grid;
                gap: 1.75rem;

                a {
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
}
</style>
