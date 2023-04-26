<template>
    <footer class="container-fluid">
        <div class="footer-links" role="links">
            <div class="col" role="address" aria-label="office address" data-type="address">
                <p class="address" aria-label="address">
                    Ollenhauer Str. 28 Stuttgart Nord, Baden-Württemberg Germany
                </p>
                <a href="#" aria-label="contact email">Email: hello@thepodcastshow</a>
            </div>
            <div class="col" role="pageLinks" data-type="pageLinks">
                <ul class="links" aria-label="internal links">
                    <li><a href="#" class="nav-link">Work</a></li>
                    <li><a href="#" class="nav-link">studio</a></li>
                    <li><a href="#" class="nav-link">blog</a></li>
                    <li><a href="#" class="nav-link">contact</a></li>
                </ul>
            </div>
            <div class="col" role="socialLinks" data-type="socialLinks">
                <ul class="links" aria-label="internal links">
                    <li><a href="#" class="nav-link">apple podcasts</a></li>
                    <li><a href="#" class="nav-link">spotify</a></li>
                    <li><a href="#" class="nav-link">twitter</a></li>
                    <li><a href="#" class="nav-link">instagram</a></li>
                </ul>
            </div>
            <div class="col" role="links">
                <PartialsLogoIcon />
            </div>
        </div>
        <!-- <div class="copyright" role="copyright">
			<p> &copy; copyright {{ today.getFullYear() }}</p>
		</div> -->
    </footer>
</template>

<script lang="ts" setup>
// const today = ref<Date>(new Date())
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    @include spacer-y;
    background: $black;
    color: $white;
    padding-block-start: min(14rem, 6vw);
    padding-inline: 1.2rem;
    margin-block-start: 13.33rem;

    // &.container-fluid {
    //     @include container-fluid(1.2rem, 1.2rem);
    //     // margin-block: inherit;
    // }

    &::before {
        content: '';
        background: inherit;
        position: absolute;
        top: -12.65%;
        inset-inline: 0;
        height: 4rem;
        clip-path: polygon(0 83%, 100% 40%, 100% 100%, 0 100%);
    }

    .footer-links {
        @include grid;
        flex-wrap: wrap;

        .col {
            order: 2;
            flex: 0 0 50%;
            margin-block: 0.65rem;
            font-size: 1.25rem;
            line-height: 1.6;

            &:first-child {
                order: 3;
                flex: 1 1 100%;
                padding-top: 3.5rem;
            }
            &:last-child {
                order: 1;
                flex: 1 1 100%;
                @include grid;
                align-items: flex-start;
                justify-content: flex-start;
                margin-left: -0.65rem;
            }

            .address {
                color: #dad7d7;
                font-size: 1.25rem;
                margin-block: 0;
            }

            a {
                text-decoration: none;
                text-transform: lowercase;
                color: #dad7d7;
                font-size: 1.12rem;

                &:hover {
                    color: $gray-dark-1;
                }
            }

            .links {
                li {
                    a {
                        @extend a;
                        text-transform: capitalize;
                    }
                }
            }

            :deep(.logo) {
                h5 {
                    color: $white;
                }
            }
        }
    }

    @include mediaQuery('lg') {
        padding-inline: 4.5rem;
        margin-block-start: 15rem;

        &::before {
            content: '';
            background: inherit;
            position: absolute;
            top: -16.65%;
        }

        .footer-links {
            @include grid;
            flex-wrap: wrap;

            .col {
                order: 0;
                flex: 0 0 22.33%;
                margin-block: 0;

                &:first-child {
                    order: 0;
                    flex: 0 0 22.33%;
                    padding-top: 0;
                }

                &:last-child {
                    flex: 1 1 30.33%;
                    @include grid;
                    align-items: flex-end;
                    justify-content: flex-end;
                }

                .address {
                    color: #dad7d7;
                    // font-size: 1.25rem;
                    margin-block: 0;
                    word-wrap: break-word;
                    width: 15.313rem;
                }

                a {
                    text-decoration: none;
                    text-transform: lowercase;
                    color: #dad7d7;
                    font-size: 1.125rem;

                    &:hover {
                        color: $secondary;
                    }
                }

                .links {
                    li {
                        a {
                            @extend a;
                            text-transform: capitalize;
                        }
                    }
                }

                :deep(.logo) {
                    h5 {
                        color: $white;
                    }
                }
            }
        }
    }

    // .copyright {
    // 	border-top: 1px solid $white;
    // 	margin-top: 3.5rem;

    // 	p {
    // 		font-size: 1.2rem;
    // 	}
    // }

    // &::after {
    // 	content: '';
    // 	position: absolute;
    // 	top: -30.5%;
    // 	inset-inline: 0;
    // 	bottom: 0;
    // 	background: inherit;
    // 	height: 15vh;
    // 	width: 100%;
    // 	// clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    // 	// transform: ;
    // }
}
</style>
