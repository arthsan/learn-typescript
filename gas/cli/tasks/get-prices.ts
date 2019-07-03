import { PetrobrasSource } from '../../lib/petrobras.source';

export const description = 'Receives HTML.';
export const usage = 'npm run bin get-prices';
export const variables = {
  name: 'A name. Any name.'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin get-prices

$ Hi, Mr. Crowley!`;

export const execute = async () => {
  const filePath = './src/cli/tasks/response/prices.json';
  let petrobrasSource: PetrobrasSource;
  petrobrasSource = new PetrobrasSource();
  const data = await petrobrasSource.getPrices();
  petrobrasSource.save(data, filePath);
  console.log('JSON file saved sucessfully: ', `"${filePath}"`);
};
