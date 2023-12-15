function replicaSort(arr, compareFunction) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (compareFunction(arr[j], arr[j + 1]) > 0) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Custom push function
function customPush(array, element) {
    array[array.length] = element;
    return array.length;
}

function replicaMap(arr, mapFunction) {
    const result = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        customPush(result, mapFunction(arr[i])); // Using customPush instead of push
    }

    return result;
}

function sortCarsByAlpha(inventory) {
    const sortedArray = replicaSort(inventory, (car1, car2) =>
        car1.car_model.toLowerCase().localeCompare(car2.car_model.toLowerCase())
    );

    // Use the custom replicaMap function to extract only car_model from each element
    const carModels = replicaMap(sortedArray, car => car.car_model);

    return carModels;
}

module.exports = sortCarsByAlpha;
