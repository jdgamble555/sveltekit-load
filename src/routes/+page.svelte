<script lang="ts">
	//import { page } from '$app/stores';
	import { posts } from '$lib/post-store';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	<li><a data-sveltekit-preload-data="off" href="/test">Test</a></li>
	<li><a data-sveltekit-preload-data="off" href="/test2">Test2</a></li>
	<li><a data-sveltekit-preload-data="off" href="/test3">Test3</a></li>
</ul>

{JSON.stringify($posts)}
