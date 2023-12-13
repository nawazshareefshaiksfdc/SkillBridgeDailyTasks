const items = require('./callback2dataitems');
const filter = require('./callback2filter');


const filteredItems = filter(items, (element) => {
  return element >4;
});

console.log(filteredItems);
  