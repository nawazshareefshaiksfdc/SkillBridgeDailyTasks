const inventory = require('./inventory');
function FavCars() {
    const filteredCars = [];
    for (let i = 0; i < inventory.length; i++) {
      const make = inventory[i].car_make;
      if (make === 'BMW' || make === 'Audi') {
        filteredCars.push(inventory[i]);
      }
    }
    console.log(JSON.stringify(filteredCars));
    return filteredCars;
  }
  
  module.exports = FavCars;

  
