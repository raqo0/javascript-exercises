const removeFromArray = function(arr, ...toRemove) {
  let tempArr = arr;
  for(const remove of toRemove) {
    tempArr = tempArr.filter(elem => elem !== remove);
  }
  return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
