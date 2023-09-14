import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  // read post from api GET request to route /api/publications/:slug
  const data = await fetch(`/api/publications/${params.slug}`);
  const jsonData = await data.json();
  return jsonData;
};
