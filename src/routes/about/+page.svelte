<script lang="ts">
  export let data: import('./$types').PageData;
</script>

<article>
  <h1>About me</h1>
  <!-- <h1>{data.title}</h1> -->
  <!-- <svelte:component this={data.short_bio} /> -->
  <!-- {@html data.short_bio} -->
  {@html data.long_bio}

</article>
