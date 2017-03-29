
function palindrome(str) {
  var re = /[\W_]/g;
  var step1 = str.toLowerCase().replace(re, "");
  var testedValue = step1.split('').reverse().join('');
  return testedValue === step1;
}



palindrome("eye");