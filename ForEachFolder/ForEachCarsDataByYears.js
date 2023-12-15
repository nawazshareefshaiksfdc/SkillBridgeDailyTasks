function CarsDataByYears(inventory, year) {
    const result = [];
    function CustomPush(arr, element) {
        arr[arr.length] = element;
        return arr;
    }
    inventory.forEach((car) => {
        if (car.car_year < year) {
            CustomPush(result, car.car_year);
        }
    });

    return result;
}

module.exports = CarsDataByYears;