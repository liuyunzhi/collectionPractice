'use strict';

function amount_even(collection) {
  //在这里写入代码
  return collection.reduce((sum , element) => {
    if (element % 2 === 0) {
      return sum += element;
    } else {
      return sum;
    }
  }, 0);
}

module.exports = amount_even;
