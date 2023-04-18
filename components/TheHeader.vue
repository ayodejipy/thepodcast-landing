<template>
    <header class="main-header container-fluid">
        <!-- logo -->
        <PartialsLogoIcon />

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
        @include container-fluid(5rem, 5rem);
    }

    @include grid;
    align-items: center;
    height: 2.6rem;
    padding: 1.2rem 0;

    .header-menu {
        @include grid;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .navigation {
            display: block;
            margin-left: 1.8rem;

            ul {
                @include grid;
                position: relative;
                list-style: none;
                padding: 0;
                margin: 0;

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
                    padding: 0.25rem 1.75rem;

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
</style>
