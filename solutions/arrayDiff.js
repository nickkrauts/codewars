function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++){
    for (let j=0; j < a.length; j++){
      while(b[i] == a[j]){
        a.splice(j,1)
      }
    }
  }return a;
}
