<script>
	import Social from './Social.svelte';
	const date = new Date();
</script>

<footer class=" footer sm:flex sm:justify-between footer-center p-4 bg-base-300 text-base-content">
	<p>Eduardo Dadalto © {date.getFullYear()}</p>
	<Social />
</footer>
