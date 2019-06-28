var table = {
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
};
table.data.brchampionship.map(function (e) {
    console.log('');
    console.log(e.name);
    e.fans.map(function (el) {
        console.log(el.Name);
    });
});
