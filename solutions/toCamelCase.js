function toCamelCase(str){
  array = str.split('')
  for (let i = 0; i < array.length; i++){
    if (array[i] == '-' || array[i] == '_'){
      array.splice(i,1);
      array[i] = array[i].toUpperCase();
    }
  }return array.join('')
  
}
