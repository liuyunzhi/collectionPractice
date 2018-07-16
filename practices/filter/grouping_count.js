'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var sort = collection.filter(element => {
    return collection.includes(element);
  });
  sort.forEach(element => {
    collection.forEach(ele => {
      if (element === ele) {
        //
      }
    });
  });
}

module.exports = grouping_count;
