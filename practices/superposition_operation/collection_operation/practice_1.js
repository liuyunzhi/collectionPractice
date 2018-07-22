'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  return collection.map(element => element * 3 + 2).reduce((sum, ele) => sum += ele);
}

module.exports = hybrid_operation;

