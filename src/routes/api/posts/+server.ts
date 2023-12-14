import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    console.log(a, b, b.metadata);
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });

  return json(sortedPosts);
};
