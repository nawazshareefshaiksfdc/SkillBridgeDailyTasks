function reduce(items, operation, cb, startingValue) {
    let acc = startingValue !== undefined ? startingValue : items[0];
    const startIndex = startingValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < items.length; i++) {
        switch (operation) {
            case '+':
                acc += items[i];
                break;
            case '-':
                acc -= items[i];
                break;
            case '*':
                acc *= items[i];
                break;
            case '/':
                acc /= items[i];
                break;
            default:
                throw new Error('Unsupported operation');
        }
    }
    cb(acc);
    return acc;
}
module.exports = reduce;