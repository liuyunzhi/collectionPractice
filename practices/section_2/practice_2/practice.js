function count_same_elements(collection) {
  //在这里写入代码
  var sort = [];
  collection.forEach(element => {
    if (!sort.includes(element)) {
      sort.push(element);
    }
  });
  let result = [];
  sort.forEach(element => {
    let obj = {};
    if (element.includes('-')) {
      let splitResult = element.split('-');
      obj['key'] = splitResult[0];
      obj['count'] = parseInt(splitResult[1]);
      result.push(obj);
    } else {
      obj['key'] = element;
      obj['count'] = 0;
      result.push(obj);
    }
  });
  result.forEach(element => {
    collection.forEach(ele => {
      if (element['key'] === ele) {
        element['count']++;
      }
    });
  });
  return result;
}

module.exports = count_same_elements;
