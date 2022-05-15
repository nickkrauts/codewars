function findOdd(A) {
  
  //loop through numbers in array
  //if number appears, make an array of same numbers ===
  //array length %2 != 0, return that array
  A.sort(function (a, b) {  return a - b;  });
  while (A[0] === A[1]){
    A.splice(0,2)
  }
  console.log(A)
  return A[0];
}
