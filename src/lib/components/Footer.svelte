<script>
	import Social from './Social.svelte';
	const date = new Date();
</script>

<footer class="footer bg-base-200 sm:flex sm:justify-between footer-center p-4 text-base-content">
	<p>© {date.getFullYear()} Eduardo Dadalto</p>
	<Social />
</footer>
