export async function load({ fetch }) {
	const about = await import('./about.md');

	return {
		about
	};
}
