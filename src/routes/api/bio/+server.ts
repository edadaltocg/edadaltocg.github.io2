import { json } from '@sveltejs/kit';

export const GET = async () => {
    const bio = {
        "name": "Eduardo Dadalto",
        "title": "PhD Student",
        "bio": `My name is Eduardo Dadalto Câmara Gomes and I'm a PhD Student in Machine Learning at Université Paris-Saclay.
         I am Working towards safer deep learning algorithms and committed to making AI a beneficial technology for all.`
    };
    return json(bio);
};
