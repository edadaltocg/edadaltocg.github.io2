import { json } from '@sveltejs/kit';
import metadata from './bio.json';
import { compile } from 'mdsvex';

export const GET = async () => {
  const data = await import('./shortbio.md?raw');
  const compiledData = await compile(data.default);
  metadata['short_bio'] = compiledData.code;
  const data2 = await import('./longbio.md?raw');
  const compiledData2 = await compile(data2.default);
  metadata['long_bio'] = compiledData2.code;
  return json(metadata);
};
