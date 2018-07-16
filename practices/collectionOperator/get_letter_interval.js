'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  const ASCII_A_CODE = 96;
  var result = [];
  var mark = false;

  if (number_a > number_b) {
    mark = true;
    let temp = number_a;
    number_a = number_b;
    number_b = temp;
  }

  for (let index = number_a; index <= number_b; index++) {
    result.push(String.fromCharCode(ASCII_A_CODE + index));
  }

  if (mark) {
    result.reverse();
  }

  return result;
}

module.exports = get_letter_interval;
