<script>
	import '../app.css';
	import Header from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Eduardo Dadalto</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex grow container justify-evenly h-full mx-auto px-2 md:px-0">
		<slot />
	</main>
	<Footer />
</div>
