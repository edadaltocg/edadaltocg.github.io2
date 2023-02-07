<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
	import Social from '$lib/components/Social.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	export let data: import('./$types').PageData;
</script>

<div class="my-2">
	<div class="flex place-items-center justify-center space-x-4 p-4">
		<div class="avatar">
			<div class="rounded-full w-32 sm:w-48">
				<img alt="Profile" src="profile_picture.jpeg" />
			</div>
		</div>
		<div class="card max-w-sm justify-center place-items-center">
			<article class="prose-sm md:prose md:mb-2">
				<h3 class="text-accent-content">{data.bio.name}, {data.bio.title}</h3>
				<p>{data.bio.bio}</p>
			</article>
			<div class="mt-2">
				<Social />
			</div>
		</div>
	</div>

	<div class="divider" />
	<!--News-->
	<!-- 
	<div>
		<article class="prose-sm md:prose">
			<h2>Recent News</h2>
			<ul>
				{#each data.news as item}
				<li>
					<table>
						<p>{item.date}</p>
						<p>{item.description}</p>
					</table>
				</li>
				{/each}
			</ul>
		</article>
	</div> -->

	<div>
		<article class="prose-sm md:prose">
			<Timeline />
		</article>
	</div>

	<!--Introduce my Publications here-->
	<div class="divider" />

	<div>
		<article class="prose-sm md:prose mb-8">
			<h2 class="text-accent-content">Recent Publications</h2>
			<!-- <p>Here are some of my publications.</p> -->
			<svelte:component this={data.publications.default} />
		</article>
	</div>

	<!-- Contact me -->
	<div class="divider" />
	<div class="">
		<article class="prose-sm md:prose mb-8">
			<h2 class="text-accent-content">Contact Me</h2>
			<p>
				You can contact me via email at <a href="mailto:{publicVariables.email}"
					>{publicVariables.email}</a
				>
			</p>
		</article>
	</div>
</div>
