function findLongestWord(str) {
 
  var split = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < split.length; i++){
    if(split[i].length > longestWord){ 
	longestWord = split[i].length; 
     }
  }

  return longestWord; 
}