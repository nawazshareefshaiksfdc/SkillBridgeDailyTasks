 const inventory = require('./inventory');
 
 function OldCars(year) {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].car_year < year) {
        count++;
      }
    }
    console.log(`There are ${count} before ${year}`)
    return count;
  }
  
  module.exports = OldCars;

