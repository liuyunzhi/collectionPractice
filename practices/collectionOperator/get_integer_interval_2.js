'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var mark = false;

  if (number_a > number_b) {
    mark = true;
    let temp = number_a;
    number_a = number_b;
    number_b = temp;
  }

  for (let index = number_a; index <= number_b; index++) {
    if (index % 2 === 0) {
      result.push(index);
    }
  }

  if (mark) {
    result.reverse();
  }

  return result;
}

module.exports = get_integer_interval_2;
