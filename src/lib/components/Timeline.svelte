<script lang="ts">
	const data = [
		{
			title: 'PhD in Machine Learning',
			date: 'Started on November 1th, 2020',
			description:
				'I am currently working towards safer Deep Learning algorithms, out-of-distribution detection and misclassification detection.'
		},
		{
			title: 'IRT-Saint Exupéry',
			date: 'Research Intern between April and October 2020',
			description:
				'I did a six months internship working on binarizing the weights of neural networks for the computer vision on the DEEL Team.'
		},
		{
			title: 'MSc in Applied Mathematics',
			date: 'Class of 2020',
			description: 'Masters in operations research and data science.'
		},
		{
			title: 'BSc in Aerospace Engineering',
			date: 'Class of 2020 with a Double Degree',
			description: 'Specialization in Autonomous Systems.'
		}
	];
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700 ml-4">
	{#each data as item}
		<li class="mb-10 sm:mb-8 ml-2 md:ml-6">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
			>
				<svg
					aria-hidden="true"
					class="w-3 h-3 text-blue-600 dark:text-blue-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/></svg
				>
			</span>
			<h3 class="flex items-center mb-1">{item.title}</h3>
			<time class="block mb-2 text-sm leading-none text-gray-400 dark:text-gray-500"
				>{item.date}</time
			>
			<p class="mb-4">
				{item.description}
			</p>
		</li>
	{/each}
</ol>
