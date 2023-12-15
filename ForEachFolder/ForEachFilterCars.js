const filterCars = (inventory) => {
    const filteredCars = [];

    inventory.forEach((car) => {
        if (car.car_make === 'Audi' || car.car_make === 'BMW') {
            filteredCars.push(car);
        }
    });

    return filteredCars;
};

module.exports = filterCars;