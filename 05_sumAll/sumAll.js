const sumAll = function(start, end) {
  if(!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
  if(start < 0 || end < 0) return 'ERROR';
  
  let tempStart = start > end ? end : start;
  let tempEnd = start > end ? start : end;
  let sum = 0;

  for(let i = tempStart; i <=  tempEnd; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
