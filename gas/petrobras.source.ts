const cheerio = require('cheerio');
const request = require('request');

interface PetrobrasPrices {
  
}

export class PetrobrasSource {
  
  fetch(): Promise<PetrobrasPrices> {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: 'http://www.petrobras.com.br/pt/produtos-e-servicos/precos-de-venda-as-distribuidoras/gasolina-e-diesel/'
      }, (err, _res, body) => {
        
        if (err) {
          return reject(err);
        }
      
        const $ = cheerio.load(body);
        const table: any = [];
        
        $('td').each(function(i) {
          const $this: any = $(this);
          table[i] = $this.text().trim();
        });
      
        const local = {};
      
        for (let i = 4; i < table.length; i += 4) {
          local[table[i]] = {
            gasolina: parseFloat(table[i + 1].replace(',', '.')),
            diesels500: parseFloat(table[i + 2].replace(',', '.')),
            diesels10: parseFloat(table[i + 3].replace(',', '.'))
          };
        }
      
        const precos = JSON.parse(JSON.stringify(local));
        return resolve(precos);
      });
    });
  }
}
