<script lang="ts">
	export let data: import('./$types').PageData;
	import { publicVariables } from '$lib/assets/public';
</script>

<article class="prose">
	<h1>{data.metadata.title}</h1>
	<p>Last modified in <span>{data.metadata.date}.</span></p>
	<p>
		For a complete list of publications, please visit my <a
			href={publicVariables.googleScholarProfile}>Google Scholar profile</a
		>.
	</p>
	<svelte:component this={data.content} />
</article>
