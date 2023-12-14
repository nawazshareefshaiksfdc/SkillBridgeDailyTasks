function flatten(items) {
    const flattenedArray = [];

    function customPush(array, ...elements) {
        for (let i = 0; i < elements.length; i++) {
            array[array.length] = elements[i];
        }
    }

    for (let i = 0; i < items.length; i++) {
        if (Array.isArray(items[i])) {
            customPush(flattenedArray, ...flatten(items[i]));
        } else {
            customPush(flattenedArray, items[i]);
        }
    }

    return flattenedArray;
}

module.exports = flatten;
