const palindromes = function (str) {
  const trimmed = str.replace(/[\W]/g, "").toLowerCase();
  const reverseStr = trimmed.split('').reverse().join('');
  return trimmed === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
