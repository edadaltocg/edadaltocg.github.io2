export interface IMD {
	metadata: {
		title: string;
		date: string;
		description?: string;
		tags?: string[];
		cover?: string;
	};
	content: string;
}
