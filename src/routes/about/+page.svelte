<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
	import Social from '$lib/components/Social.svelte';
	export let data: import('./$types').PageData;
</script>

<article class="">
	<h1>{data.about.metadata.title}</h1>
	<svelte:component this={data.about.default} />

	<h2 class="text-accent-content">Contact</h2>
	<p>
		You can contact me via email at
		<a href="mailto:{publicVariables.email}">{publicVariables.email}</a>. Happy to discuss new
		projects and collaborations.
	</p>
</article>
