function filter(items, cb) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (cb(item)) {
      result[result.length] = item;
    }
  }
  return result;
}

module.exports = filter;


