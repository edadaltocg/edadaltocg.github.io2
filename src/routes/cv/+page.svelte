<script lang="ts">
  // export let data: import('./$types').PageData;
  // redirect to cv.pdf
  import { onMount } from 'svelte';

  onMount(() => {
    window.location.href = 'cv.pdf';
  });
</script>

<article class="mx-auto">
  <h3>Redirecting...</h3>
  <!-- <h1>{data.metadata.title}</h1>
  <a href="cv.pdf" class="underline">pdf link</a>
  <p>Last modified in <span>{data.metadata.date}.</span></p>
  <svelte:component this={data.content} />
  <div class="divider" />
  <div class="my-2">
    <p>
      For an extended version of my CV in pdf file format, please check the <a href="cv.pdf">link</a
      >.
    </p>
  </div> -->
</article>
