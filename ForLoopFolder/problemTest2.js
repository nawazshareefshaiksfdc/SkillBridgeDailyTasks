const inventory = require('./inventory');
const lastCarInfo = require('./problem2');
let lastCar = lastCarInfo(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)
