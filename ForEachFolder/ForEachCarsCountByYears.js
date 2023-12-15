function CarsDataByYears(inventory, year) {
    let Count = 0;
    inventory.forEach((car) => {
        if (car.car_year < year) {
            Count++;
        }
    });

    return Count;
}

module.exports = CarsDataByYears;
