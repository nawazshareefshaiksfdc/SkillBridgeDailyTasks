const findCarById = (inventory, targetId) => {
    let foundCar;
    inventory.forEach((car) => {
        if (car.id === targetId) {
            foundCar = car;
        }
    });
    return foundCar;
};

module.exports = findCarById;