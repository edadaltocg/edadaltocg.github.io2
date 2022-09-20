<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<button class="flex place-items-center justify-center bg-secondary rounded-full w-8 h-8">
		<slot />
	</button>
</a>
