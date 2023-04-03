import { json } from '@sveltejs/kit';
import data from './news.json';

export const GET = async () => {
	return json(data);
};
