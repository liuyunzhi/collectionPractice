'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((min, element) => min < element ? min : element, Math.MAX_VALUE);
}

module.exports = collect_min_number;

