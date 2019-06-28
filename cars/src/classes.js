"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(model) {
        this.modelID = model;
    }
    Car.prototype.potIncrement = function (num) {
        this.modelID.pot = this.modelID.pot + num;
    };
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.modelID.model + " and has " + this.modelID.pot + "hp.");
    };
    return Car;
}());
exports.Car = Car;
