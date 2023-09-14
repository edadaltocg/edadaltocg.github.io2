import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  // const about = await import('./about.md');
  const data = await fetch(`/api/bio`);
  const jsonData = await data.json();

  return jsonData;
};
