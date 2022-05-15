String.prototype.toJadenCase = function () {
  let result = this;
  let resultArray = result.split(" ");
  for (let i = 0; i < resultArray.length; i++){
  resultArray[i] = resultArray[i].charAt(0).toUpperCase() + resultArray[i].slice(1);
  }
  result = resultArray.join(' ');
  return result;
};
