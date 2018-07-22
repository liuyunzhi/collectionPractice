'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let sort = collection.split('->').map(element => parseInt(element)).sort(((a ,b) => a - b));
  let length = sort.length;
  if ( length % 2 === 0) {
    return (sort[length / 2 - 1] + sort[length / 2]) / 2;
  }
  return sort[parseInt(length / 2)];
}

module.exports = compute_chain_median;
