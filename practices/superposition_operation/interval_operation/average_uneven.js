'use strict';

function average_uneven(collection) {
  //在这里写入代码
  return collection.reduce((sum,element) => {
    if (element % 2 === 1) {
      return sum += element;
    }
    return sum;
  },0) / (collection.length / 2);
}

module.exports = average_uneven;
