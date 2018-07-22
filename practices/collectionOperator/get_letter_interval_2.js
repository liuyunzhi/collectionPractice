'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  var mark = false;

  if (number_a > number_b) {
    mark = true;
    let temp = number_a;
    number_a = number_b;
    number_b = temp;
  }

  for (let index = number_a; index <= number_b; index++) {
    let decade = parseInt(index / 26);
    let unit = index % 26;
    if (decade === 0) {
      result.push(alphabetString[unit - 1]);
    } else if(decade === 1 && unit === 0) {
      result.push(alphabetString[25]);
    } else if(unit === 0) {
      result.push(alphabetString[decade - 2] + alphabetString[25]);
    } else {
      result.push(alphabetString[decade - 1] + alphabetString[unit - 1]);
    }
  }

  if (mark) {
    result.reverse();
  }

  return result;
}

module.exports = get_letter_interval_2;

