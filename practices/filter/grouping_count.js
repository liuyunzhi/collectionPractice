'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var sort = [];
  collection.forEach(element => {
    if (!sort.includes(element)) {
      sort.push(element);
    }
  });
  let obj = {};
  sort.forEach(element => obj[element] = 0);
  sort.forEach(element => {
    collection.forEach(ele => {
      if (element === ele) {
        obj[element]++;
      }
    });
  });
  return obj;
}

module.exports = grouping_count;
