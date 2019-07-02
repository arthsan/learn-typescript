const fs = require('fs');
const obj = {
  name: 'nathan',
  age: 26
}
fs.writeFile('src/lib/example-teste.json', JSON.stringify(obj, null, 2), 
  function(err) {
    if(err) throw err;
    console.log('Completed')
  }
);

