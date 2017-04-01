function range(start, end, step) {
  if (step == null) step = 1;
  var arr = [];
  
  if (step > 0) {
for ( i = start; i <= end; i+= step) 
  arr.push(i);
}
  else {
for ( i = start; i >= end; i += step)
   arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var added = 0;
for ( var i = 0; i < arr.length; i++) {
   added += arr[i];
}
  return added;
}
  
  
  