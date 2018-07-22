'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  let length = collection.length;
  let median;
  if (length % 2 === 0) {
    median = Math.ceil((collection[length / 2] + collection[length / 2 - 1]) / 2);
  } else {
    median = collection[parseInt(length / 2)];
  }
  let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  let decade = parseInt(median / 26);
  let unit = median % 26;
  if (decade === 0) {
    return alphabetString[unit - 1];
  } else if(decade === 1 && unit === 0) {
    return alphabetString[25];
  } else if(unit === 0) {
    return alphabetString[decade - 2] + alphabetString[25];
  } else {
    return alphabetString[decade - 1] + alphabetString[unit - 1];
  }
}

module.exports = median_to_letter;
