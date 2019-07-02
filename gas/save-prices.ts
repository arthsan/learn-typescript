import { PetrobrasSource } from '../lib/petrobras.source';
const fs = require('fs');

export const list = async () => {
  const prices = new PetrobrasSource();
  const data = await prices.getPrices();
  fs.writeFile('prices.json', JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  });
};

// export class FileTools
// create method saveFile receiving two args:
// 1 - file name/ path
// 2 - file content
// OBS: use fs.writeFileSync
