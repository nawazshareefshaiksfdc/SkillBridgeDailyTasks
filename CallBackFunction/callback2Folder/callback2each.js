function each(items, cb) {
    let result = [];
    for (let i = 0; i <= items.length - 1; i++) {
        let result = cb(items[i], i, items);
    }
    return result;
}

module.exports = each;