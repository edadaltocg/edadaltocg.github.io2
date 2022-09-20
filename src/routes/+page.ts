export async function load() {
	const publications = await import('./publications/publications.md');

	return {
		publications
	};
}
