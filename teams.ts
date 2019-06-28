const table = {
  "data": {
    "brchampionship": [
      {
        "name": "Corinthians",
        "fans": [
          {
            "Name": "Daniel"
          },
          {
            "Name": "Pedro"
          }
        ]
      },
      {
        "name": "Palmeiras",
        "fans": [
          {
            "Name": "Zé"
          }
        ]
      },
      {
        "name": "Santos",
        "fans": [
          {
            "Name": "Natan"
          }
        ]
      },
      {
        "name": "São Paulo",
        "fans": [
          {
            "Name": "Flávio"
          }
        ]
      }
    ]
  }
}

table.data.brchampionship.map((e) => {
  console.log('');
  console.log(e.name);
  e.fans.map((el) => {
    console.log(el.Name)
  } )
})

