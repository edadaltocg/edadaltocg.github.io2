<script lang="ts">
	export let data: import('./$types').PageData;
	import { publicVariables } from '$lib/assets/public';
</script>

<article class="prose">
	<h1>{data.metadata.title}</h1>
	<p>Last modified in <span>{data.metadata.date}.</span></p>
	<svelte:component this={data.content} />
	<div class="divider" />
	<div class="my-2">
		<p>For an up to date or extended version of my CV, please contact me through email.</p>
	</div>
</article>
