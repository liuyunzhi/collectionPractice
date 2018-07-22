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
    if (element.length !== 1) {
      let splitResult = [];
      if (element.includes('-')) {
        splitResult = element.split('-');
      }
      if (element.includes(':')) {
        splitResult = element.split(':');
      }
      if (element.includes('[')) {
        splitResult = element.split('[');
      }
      let mark = false;
      result.forEach(ele => {
        if (ele.name === splitResult[0]) {
          mark = true;
          ele.summary += parseInt(splitResult[1]);
        }
      });
      if(!mark){
        obj['name'] = splitResult[0];
        obj['summary'] = parseInt(splitResult[1]);
        result.push(obj);
      }
    } else {
      let mark = false;
      result.forEach(ele => {
        if (ele.name === element) {
          mark = true;
        }
      });
      if(!mark) {
        obj['name'] = element;
        obj['summary'] = 0;
        result.push(obj);
      }
    }
  });
  result.forEach(element => {
    collection.forEach(ele => {
      if (element['name'] === ele) {
        element['summary']++;
      }
    });
  });
  return result;
}

module.exports = count_same_elements;
