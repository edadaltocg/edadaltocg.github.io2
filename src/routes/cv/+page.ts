export const load = async () => {
	const post = await import('./cv.md');
	const metadata = post.metadata;
	const content = post.default;

	return {
		metadata,
		content
	};
};
