const items = require('./callback2data');
const each = require('./callback2each');

each(items, (element, index, array) => {
    console.log(element, index);
})