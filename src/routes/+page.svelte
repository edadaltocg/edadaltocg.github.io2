<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
	import Social from '$lib/components/Social.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	export let data: import('./$types').PageData;
</script>

<div class="my-2">
	<div class="flex place-items-center justify-center space-x-4 p-4">
		<div class="avatar">
			<div class="rounded-full w-48">
				<img alt="Profile" src="profile_picture.jpeg" />
			</div>
		</div>
		<div class="card max-w-sm justify-center place-items-center">
			<article class="prose container p-4">
				<h3 class="text-accent-content">Welcome to Personal Website!</h3>
				<p>
					My name is Eduardo Dadalto Câmara Gomes and I'm a PhD Student in Machine Learning at
					Université Paris Saclay.
				</p>
			</article>
			<Social />
		</div>
	</div>

	<div class="divider" />
	<!--Introduce my projects here-->

	<div>
		<article class="prose container p-4">
			<!-- <h1>Timeline</h1> -->
			<Timeline />
		</article>
	</div>

	<!--Introduce my Publications here-->
	<div class="divider" />

	<div>
		<article class="prose container p-4">
			<h1 class="text-accent-content">Recent Publications</h1>
			<!-- <p>Here are some of my publications.</p> -->
			<svelte:component this={data.publications.default} />
		</article>
	</div>
</div>
