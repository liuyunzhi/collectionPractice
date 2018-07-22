'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((mun , element) => mun += element) / collection.length;
}

module.exports = compute_average;

