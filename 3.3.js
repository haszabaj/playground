function countBs (string) {
 counter = 0;
  for (var n = 0; n < string.length; n++) {
    if (string.charAt(n) == "B")
    counter ++;
      } 
  return counter;
}

function countChar (string, char) {
  counter = 0;
  for (var n = 0; n < string.length; n++) {
    if (string.charAt(n) == char )
    counter ++;
      } 
  return counter;
}