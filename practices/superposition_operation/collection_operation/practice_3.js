'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  let result = [];
  collection.forEach(element => {
    if (element % 2 === 1) {
      result.push(element * 3 + 5);
    }
  });
  return result.reduce((sum,element) => sum += element);
}

module.exports = hybrid_operation_to_uneven;

