
function confirmEnding(str, target) {
 if (str.substr(-target.length) == target) {
   return true;
 }
  else {
    return false;
  }
 }
confirmEnding("Bastian", "n");
