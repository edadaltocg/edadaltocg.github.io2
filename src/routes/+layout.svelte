<script>
	import '../app.css';
	import Header from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Eduardo Dadalto</title>
</svelte:head>

<Header />
<main class="flex container justify-evenly mx-auto px-2 md:px-0">
	<slot />
</main>
<Footer />
	