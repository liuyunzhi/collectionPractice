'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for (let index = collection.length; index > -1; index--) {
    if (collection[index] === element) {
      return index;
    }
  }
}

module.exports = calculate_elements_sum;
