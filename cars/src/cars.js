"use strict";
exports.__esModule = true;
var classes_1 = require("../src/classes");
var arrCars = [
    {
        model: 'Vectra',
        make: 'GM',
        pot: 50
    },
    {
        model: 'Camaro',
        make: 'GM',
        pot: 350
    }
];
arrCars.map(function (e) {
    var newCar = new classes_1.Car(e);
    newCar.potIncrement(50);
    newCar.displayMake();
});
// newCar.potIncrement(20)
// newCar.displayMake()
