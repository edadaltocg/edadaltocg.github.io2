export async function load() {
	const post = await import('./publications.md');
	const metadata = post.metadata;
	const content = post.default;

	return {
		metadata,
		content
	};
}
