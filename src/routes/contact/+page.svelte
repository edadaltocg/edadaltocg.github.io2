<script lang="ts">
	import { publicVariables } from '$lib/assets/public';
</script>

<article>
	<h1>Contact</h1>
	<p>
		You can contact me via email at
		<a href="mailto:{publicVariables.email}">{publicVariables.email}</a>. Happy to discuss new
		projects and collaborations.
	</p>
	<h2>Profiles</h2>
	<ul>
		<li>
			<a href="https://github.com/{publicVariables.githubProfile}">Github</a>
		</li>
		<li>
			<a href="https://linkedin.com/in/{publicVariables.linkedinProfile}">LinkedIn</a>
		</li>
		<li>
			<a href={publicVariables.googleScholarProfile}>Google Scholar</a>
		</li>
	</ul>
</article>
