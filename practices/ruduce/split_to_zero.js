'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  let index = number * 10;
  for ( ; index > 0; index -= interval * 10){
    result.push(index / 10);
  }
  result.push(index / 10);
  return result;
}

module.exports = spilt_to_zero;
