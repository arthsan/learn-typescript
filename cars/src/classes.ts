import { CarMade } from '../models/iCars';

export class Car {
  modelID: CarMade;
  pot: Number;

  constructor(model: CarMade) {
    this.modelID = model;
  }

  potIncrement(num):void {
    this.modelID.pot = this.modelID.pot + num;
  }

  displayMake():void {
    console.log(`This car is ${this.modelID.model} and has ${this.modelID.pot}hp.`)
  }
}
