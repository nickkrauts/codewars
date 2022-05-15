//https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  str = str.toLowerCase();
  strArray = str.split('');
  let result = true;
  console.log(strArray)
  
  if (str == ''){
    return true;
  }
  
  let strLength = strArray.length;
  for (let i = 0; i < strLength; i++) {
    let checkLetterI = strArray[i];
    for (let j = 0; j < strLength; j++){
      if (i == j) {
        continue;
      }
      let checkLetterJ = strArray[j];
      console.log([checkLetterI,checkLetterJ])
      if (checkLetterI == checkLetterJ) {
                result = false;
        break;
      }else continue;
    }
  }return result;
}
