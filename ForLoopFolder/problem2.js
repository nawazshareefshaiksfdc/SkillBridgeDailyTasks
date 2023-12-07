const inventory = require('./inventory');

function lastCarInfo(){
    let lastCar = inventory[inventory.length-1];
    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)
}



module.exports = lastCarInfo;
