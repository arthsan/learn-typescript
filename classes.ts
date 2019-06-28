class Car {
  doors: Number;
  isEletric: Boolean;
  modelID: CarMade;
  pot: Number;

  constructor(model: CarMade) {
    this.modelID = model;
  }

  potIncrement(num: number) {
    this.modelID.pot = this.modelID.pot + num;
  }

  displayMake():void {
    console.log(`This car is ${this.modelID.model} and has ${this.modelID.pot}hp.`)
  }
}

const Vectra = {
  model: 'Vectra',
  make: 'GM',
  pot: 50
}

const newCar = new Car(Vectra);

newCar.potIncrement(20)
newCar.displayMake()

interface CarMade {  
  model,  
  make,  
  pot
}