<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
	import Social from '$lib/components/Social.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	export let data: import('./$types').PageData;
</script>

<div class="my-2">
	<div class="sm:flex place-items-center justify-center space-x-4 sm:space-x-8">
		<div class="flex justify-center">
			<img class="rounded-full w-32 sm:max-w-sm" alt="Profile" src="profile_picture.jpeg" />
		</div>
		<div class="card justify-center place-items-center">
			<article class="mb-2">
				<h1 class="text-accent-content">{data.bio.name}</h1>
				<h3>{data.bio.title}</h3>
				<p>{@html data.bio.bio}</p>
			</article>
			<div class="mt-2">
				<Social />
			</div>
		</div>
	</div>

	<div class="divider" />
	<!-- Interests -->
	<article>
		<h2 class=" mb-0 mt-0 text-accent-content">Research Interests</h2>
		<ul class="flex">
			{#each data.interests as item}
				<li class="flex justify-center place-items-center mx-4">
					<p>{item}</p>
				</li>
			{/each}
		</ul>
	</article>

	<!--News-->
	<article class="mb-8">
		<h2 class="text-accent-content">News</h2>
		<table class="flex space-x-1">
			<tbody>
				{#each data.news as item}
					<tr>
						<th class="text-accent-content w-20">{item.date}</th>
						<td>{@html item.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</article>

	<!--Introduce my Publications here-->
	<div class="divider" />

	<article class="mb-8">
		<h2 class="text-accent-content">Recent Publications</h2>
		<!-- <p>Here are some of my publications.</p> -->
		<p>
			For a complete list, please check my <a href={publicVariables.googleScholarProfile}
				>Google Scholar</a
			> page.
		</p>
		<svelte:component this={data.publications.default} />
	</article>

	<!-- Contact me -->
	<div class="divider" />
	<article class="mb-8">
		<h2 class="text-accent-content">Contact</h2>
		<p>
			You can contact me via email at
			<a href="mailto:{publicVariables.email}">{publicVariables.email}</a>. Happy to discuss new
			projects and collaborations.
		</p>
	</article>
</div>
