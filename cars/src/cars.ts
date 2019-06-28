import { Car } from '../src/classes';
import { CarMade } from '../models/iCars';

const arrCars:CarMade[] = [
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
]

arrCars.map((e) => {
  const newCar = new Car(e); 
  newCar.potIncrement(50);
  newCar.displayMake()
})


// newCar.potIncrement(20)
// newCar.displayMake()