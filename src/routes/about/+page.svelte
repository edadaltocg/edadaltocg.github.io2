<script lang="ts">
  import { publicVariables } from '$lib/assets/public';
  import Social from '$lib/components/Social.svelte';
  export let data: import('./$types').PageData;
</script>

<article>
  <h1>About me</h1>
  <!-- <h1>{data.title}</h1> -->
  <!-- <svelte:component this={data.short_bio} /> -->
  <!-- {@html data.short_bio} -->
  {@html data.long_bio}

  <!-- <h2 class="text-accent-content">Contact</h2> -->
  <p>
    You can contact me via email at
    <a href="mailto:{publicVariables.email}">{publicVariables.email}</a>. Happy to discuss new
    projects and collaborations.
  </p>
</article>
