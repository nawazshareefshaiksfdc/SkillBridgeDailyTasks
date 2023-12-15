const inventory = require('./ForEachData')
const findCarById = require('./ForEachFindCarById');

const foundCar = findCarById(inventory, 33);

if (foundCar) {
    const { id,car_make, car_model } = foundCar;
    console.log('Car id is '+id+' car make is '+car_make+' car model is '+car_model);
} else {
    console.log("Car not found");
}