import { json } from '@sveltejs/kit';

const data = [
		{
			title: 'PhD in Machine Learning',
			date: 'Started on November 1th, 2020',
			description: 'I am currently working towards safer Deep Learning algorithms, out-of-distribution detection and misclassification detection.'
		},
		{
			title: 'IRT-Saint Exupéry',
			date: 'Research Intern between April and October 2020',
			description: 'I did a six months internship working on binarizing the weights of neural networks for the computer vision on the DEEL Team.'
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

export const GET = async () => {
    return json(data);
};