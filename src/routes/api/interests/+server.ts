import { json } from '@sveltejs/kit';
import data from './interests.json';

export const GET = async () => {
  return json(data);
};
