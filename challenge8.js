
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var result = str.repeat(num);
    return result;
  }      
  else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
