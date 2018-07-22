'use strict';
var number_map_to_word_over_26 = function(collection){
  const letter = 'abcdefghijklmnopqrstuvwxyz';
  return collection.map(element => {
    let decade = parseInt(element / 26);
    let unit = element % 26;
    if (decade) {
      return letter[decade - 1] + letter[unit - 1 ];
    } else {
      return letter[unit - 1];
    }
  });
};

module.exports = number_map_to_word_over_26;
