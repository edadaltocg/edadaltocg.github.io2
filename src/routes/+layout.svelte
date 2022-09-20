<script>
	import '../app.css';
	import Header from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Eduardo Dadalto</title>
</svelte:head>

<Header />
<main class="flex container mx-auto justify-evenly">
	<slot />
</main>
<Footer />
