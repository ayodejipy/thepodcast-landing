<template>
  <footer class="container-fluid">
    <div class="footer-links" role="links">
      <div class="col" role="address" aria-label="office address">
        <p class="address" aria-label="address">
          Ollenhauer Str. 28 Stuttgart Nord, Baden-Württemberg Germany
        </p>
        <a href="#" aria-label="contact email">hello@thepodcastshow</a>
      </div>
      <div class="col" role="pageLinks">
        <ul class="links" aria-label="internal links">
          <li><a href="#" class="nav-link">Work</a></li>
          <li><a href="#" class="nav-link">studio</a></li>
          <li><a href="#" class="nav-link">blog</a></li>
          <li><a href="#" class="nav-link">contact</a></li>
        </ul>
      </div>
      <div class="col" role="socialLinks">
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
const today = ref<Date>(new Date());
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  @include spacer-y;
  background: $black;
  color: $white;
  padding-block-start: min(14rem, 6vw);
  margin-block-start: 20rem;

  .footer-links {
    @include grid;
    flex-wrap: wrap;

    .col {
      flex: 0 0 18%;
      // outline: 1px solid red;

      &:last-child {
        flex: 1 1 18%;
        @include grid;
        align-items: flex-end;
        justify-content: flex-end;
      }

      .address {
        color: #dad7d7;
        // font-size: 1.25rem;
        margin-block: 0;
      }

      a {
        text-decoration: none;
        text-transform: lowercase;
        color: #dad7d7;
        font-size: 1.125rem;

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
