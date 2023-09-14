<script lang="ts">
  import { publicVariables } from '$lib/assets/public';
  import Social from '$lib/components/Social.svelte';
  export let data: import('./$types').PageData;

  let news = data.news;
  let currentNewsPage = 0;
  const newsPerPage = 10;
  const newsPageCount = Math.ceil(news.length / newsPerPage);
  let newsPage = news.slice(0, newsPerPage);

  const goToPage = (page: number) => {
    currentNewsPage = page;
    newsPage = news.slice(page * newsPerPage, (page + 1) * newsPerPage); // this could be an api call
  };
</script>

<div class="my-2">
  <div class="sm:flex place-items-center justify-center space-x-4 sm:space-x-8">
    <div class="flex justify-center">
      <img class="rounded-full w-32 sm:max-w-sm" alt="Profile" src="profile_picture.jpeg" />
    </div>
    <div class="card justify-center place-items-center">
      <article class="mb-2">
        <h1 class="text-accent-content">I Am {data.bio.name}</h1>
        <h3>{data.bio.title}</h3>
        <p>{@html data.bio.short_bio}</p>
      </article>
    </div>
  </div>
  <div class="flex justify-center" style="">
    <Social />
  </div>

  <div class="divider" />
  <!-- Interests -->
  <!-- <article>
		<h2 class=" mb-0 mt-0 text-accent-content">Research Interests</h2>
		<ul class="flex">
			{#each data.interests as item}
				<li class="flex justify-center place-items-center mx-4">
					<p>{item}</p>
				</li>
			{/each}
		</ul>
	</article> -->

  <!--News-->
  <article class="mb-8">
    <h2 class="text-accent-content">News</h2>
    <table class="flex space-x-1">
      <tbody>
        {#each newsPage as item}
          <tr>
            <th class="w-20">{item.date}</th>
            <td>{@html item.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </article>
  <div class="flex justify-center">
    <div class="join">
      {#each Array.from({ length: newsPageCount }) as _, i}
        <button
          class="join-item btn mr-2"
          class:btn-active={currentNewsPage === i}
          on:click={() => goToPage(i)}
        >
          {i + 1}
        </button>
      {/each}
    </div>
  </div>
  <!--Introduce my Publications here-->
  <div class="divider" />

  <article class="mb-8">
    <h2 class="text-accent-content">Recent Publications</h2>
    <!-- <p>Here are some of my publications.</p> -->
    <p>
      For a complete list, please check my <a href={publicVariables.googleScholarProfile}
        >Google Scholar</a
      > page.
    </p>
    <svelte:component this={data.publications.default} />
  </article>

  <!-- Contact me -->
  <div class="divider" />
  <article class="mb-8">
    <h2 class="text-accent-content">Contact</h2>
    <p>
      You can contact me via email at
      <a href="mailto:{publicVariables.email}">{publicVariables.email}</a>. Happy to discuss new
      projects and collaborations.
    </p>
  </article>
</div>
