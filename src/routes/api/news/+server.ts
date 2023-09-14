import { json } from '@sveltejs/kit';
import data from './news.json';

export const GET = async () => {
  // get the latest 20 news
  const latestNews = data; // .slice(0, 20);
  return json(latestNews);
};
