<script lang="ts">
	import { posts } from '$lib/post-store';
</script>

<ul>
	<li><a data-sveltekit-preload-data="off" href="/">Home</a></li>
</ul>

{JSON.stringify($posts)}
