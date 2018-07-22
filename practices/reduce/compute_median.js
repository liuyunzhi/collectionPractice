'use strict';

function compute_median(collection) {
  //在这里写入代码
  let length = collection.sort((a, b) => a - b).length;
  if (length % 2 === 0) {
    return (collection[length / 2 - 1] + collection[length / 2]) / 2;
  }
  return collection[parseInt(length / 2)];
}

module.exports = compute_median;


