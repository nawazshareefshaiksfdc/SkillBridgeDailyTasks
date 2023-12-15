const LastCar = (inventory) => {
    let foundCar;

    inventory.forEach((car) => {
        if (car.id === inventory.length) {
            foundCar = car;
        }
    });

    return foundCar;
};

module.exports = LastCar;