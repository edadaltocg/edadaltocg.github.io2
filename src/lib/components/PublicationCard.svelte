<script lang="ts">
  import type { IMD } from 'src/types/md.type';
  interface ExtendedIMD extends IMD {
    code_url: string | null | undefined;
    poster_url: string | null | undefined;
    video_url: string | null | undefined;
    bib: string | null | undefined;
    arxiv_url?: string;
  }

  export let data: ExtendedIMD;
</script>

<img alt="" />
<article>
  <h1>{data.metadata.title}</h1>
  <p>{data.content}</p>
</article>
<div class="flex">
  <a href={data.arxiv_url}>ArXiv</a>
  <a href={data.code_url}>Code</a>
  <a href={data.poster_url}>Poster</a>
  <a href={data.video_url}>Video</a>
  <a href={data.bib}>Citation</a>
</div>
