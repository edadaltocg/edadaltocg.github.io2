<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
	import Social from '$lib/components/Social.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	console.log(publicVariables);
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
				<p>My name is Eduardo Dadalto and I'm a PhD Student in Safety AI.</p>
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
			<h1 class="text-accent-content">Publications</h1>
			<p>Here are some of my publications.</p>
			<p>
				Pierre Colombo, <span class="italic">Eduardo Dadalto</span>, Guillaume Staerman, Nathan
				Noiry, and Pablo Piantanida. “Beyond Mahalanobis Distance for Textual OOD Detection”. In
				Advances in Neural Information Processing Systems 35 (NeurIPS 2022).
				https://openreview.net/forum?id=mfwdY3U_9ea. 2022
			</p>

			<p>
				<span class="talic">Eduardo Dadalto</span>, Florence Alberge, Pierre Duhamel, and Pablo
				Piantanida. “Igeood: An Information Geometry Approach to Out-of-Distribution Detection.” In
				International Conference on Learning Representations.
				https://openreview.net/forum?id=mfwdY3U_9ea. 2022.
			</p>

			<p>
				Meryem Benammar, <span class="italic">Eduardo Dadalto</span>, and Pablo Piantanida.
				“CSI-Aided Robust Neural-Based Decoders.” In 2021 11th International Symposium on Topics in
				Coding (ISTC), 1–5. https://doi.org/10.1109/ISTC49272.2021.9594117. 2021.
			</p>
		</article>
	</div>
</div>
