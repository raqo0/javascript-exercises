const repeatString = function(string, repeatAmount) {
  if(repeatAmount < 0) return 'ERROR';
  
  let tempStr = '';
  for(let i = 0; i < repeatAmount; i++) {
    tempStr+=string;
  }
  return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
