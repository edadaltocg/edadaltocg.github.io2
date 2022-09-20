<script>
	import '../app.css';
	import Header from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="flex container mx-auto justify-evenly">
	<slot />
</main>
<Footer />
