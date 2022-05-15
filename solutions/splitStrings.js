function solution(str){
   strArray = str.split('');
  if (strArray.length % 2 != 0){
    strArray.push('_');
  }
  for (i = 0; i < strArray.length; i++){
  strArray[i] = strArray[i] + strArray[i+1];
  //splice out second letter
  strArray.splice((i+1),1);
        
    }
  return strArray;
  }
