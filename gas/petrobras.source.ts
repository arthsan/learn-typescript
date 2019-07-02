const cheerio = require('cheerio');
const request = require('request');

interface IPetrobrasPrice {
  gasolina: number;
  diesels500: number;
  diesels10: number;
}

interface IPetrobrasPrices {
  MANAUS: IPetrobrasPrice;
  ITACOATIARA: IPetrobrasPrice;
  BELÉM: IPetrobrasPrice;
  'SÃO LUÍS': IPetrobrasPrice;
  FORTALEZA: IPetrobrasPrice;
  GUAMARÉ: IPetrobrasPrice;
  CABEDELO: IPetrobrasPrice;
  IPOJUCA: IPetrobrasPrice;
  MACEIÓ: IPetrobrasPrice;
  'SÃO FRANCISCO DO CONDE': IPetrobrasPrice;
  CANDEIAS: IPetrobrasPrice;
  JEQUIÉ: IPetrobrasPrice;
  ITABUNA: IPetrobrasPrice;
  VITÓRIA: IPetrobrasPrice;
  'VILA VELHA': IPetrobrasPrice;
  'VOLTA REDONDA': IPetrobrasPrice;
  'DUQUE DE CAXIAS': IPetrobrasPrice;
  BETIM: IPetrobrasPrice;
  UBERLÂNDIA: IPetrobrasPrice;
  UBERABA: IPetrobrasPrice;
  GUARULHOS: IPetrobrasPrice;
  BARUERI: IPetrobrasPrice;
  'SÃO CAETANO DO SUL': IPetrobrasPrice;
  CUBATÃO: IPetrobrasPrice;
  SANTOS: IPetrobrasPrice;
  PAULÍNIA: IPetrobrasPrice;
  'SÃO JOSÉ DOS CAMPOS': IPetrobrasPrice;
  'RIBEIRÃO PRETO': IPetrobrasPrice;
  BRASÍLIA: IPetrobrasPrice;
  'SENADOR CANEDO': IPetrobrasPrice;
  ARAUCÁRIA: IPetrobrasPrice;
  PARANAGUÁ: IPetrobrasPrice;
  ITAJAÍ: IPetrobrasPrice;
  GUARAMIRIM: IPetrobrasPrice;
  BIGUAÇU: IPetrobrasPrice;
  CANOAS: IPetrobrasPrice;
  'RIO GRANDE': IPetrobrasPrice;
}


export class PetrobrasSource {
  
  private fetch(): Promise<any> {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: 'http://www.petrobras.com.br/pt/produtos-e-servicos/precos-de-venda-as-distribuidoras/gasolina-e-diesel/'
      }, (err, _res, body) => {
        
        if (err) {
          return reject(err);
        }
        return resolve(body);
      });
    });
  }
  
  private buildJson(body): IPetrobrasPrices {
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
    return precos;

  }

  async getPrices(): Promise<IPetrobrasPrices> {
    const body = await this.fetch();
    const pricesJson = this.buildJson(body);

    return pricesJson;
  }
}
