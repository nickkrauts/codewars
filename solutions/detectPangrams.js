//convert string to all lowercase letters, remove punctuation & sort alpha
function toSortedLowerCase(string) {
  let removePunctuation = string.replace(/[^a-zA-Z]+/g, '');
  let lowerString = removePunctuation.toLowerCase();
  let finalString = lowerString.split('').sort().join('');
  return finalString;
}
//convert finalString to array with no repeated letters
function singleLetters(string){
  let sortedString = '';
  sortedString = toSortedLowerCase(string);
  let array = sortedString.split('');
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (i === j) continue;
      else if (array[i] == array[j]){
        array.splice(j,1);
      }
    }
  }let singleLetterString = array.join('');
  return singleLetterString;
}

function isPangram(string){
  let checkString = singleLetters(string);
  if (checkString == 'abcdefghijklmnopqrstuvwxyz'){
    return true;
  } else return false;
}
