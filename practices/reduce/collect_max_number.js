'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((max, element) => max > element ? max : element, Math.MIN_VALUE);
}

module.exports = collect_max_number;
