
function truncateString(str, num) {
  if (num <= 3) {
    var shortdotted = str.substr(0, num);
    return shortdotted + "...";
    
  }
  else if (str.length > num) {
    var dotted = str.substr(0, (num - 3));
    return dotted + "...";
  } 
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
