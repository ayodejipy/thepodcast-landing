<template>
	<div class="podcast" role="contentwrapper" aria-label="single podcast container">
		<div class="podcast-img-cover" role="imgwrapper">
			<img 
				src="https://images.unsplash.com/photo-1681634492508-969ed36a85a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
				alt="Old church build" role="img" />
			<div class="podcast-time" role="podcast time">32:58</div>
		</div>

		<div class="podcast-meta" role="podcast-info">
			<h5>How I really enjoy surfing and life on the beach</h5>
			<p arial="author">Jonathan wise</p>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.podcast {
	flex: 1 0 23.33%;
	max-width: 25%;

	.podcast-img-cover {
		position: relative;
		height: 30rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.podcast-time {
			position: absolute;
			right: 0;
			bottom: 0;
			background: $white;
			width: 5rem;
			text-align: center;
		}
	}

	.podcast-meta {
		h5 {
			font-weight: 400;
			line-height: 1.2;
			margin-block: 0.8rem;
		}
		p {
			color: #bebebe;
			font-size: 1.2rem;
			text-transform: capitalize;
			margin-block: .65rem 0;
		}
	}
}
</style>