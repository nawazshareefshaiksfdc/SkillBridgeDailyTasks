
 function find(items, cb) {
    for (let i = 0; i < items.length; i++) {
      if (cb(items[i])) {
        return items[i];
      }
    }
  }


module.exports = find; 