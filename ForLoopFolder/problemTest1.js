const inventory = require(`./inventory`);
const CarDetailsById = require('./problem1') 
let DataById = CarDetailsById();
console.log(`Car ${ID} is a ${DataById.car_year} ${DataById.car_make} ${DataById.car_model}`);
DataById(inventory,32);