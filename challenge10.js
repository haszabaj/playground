
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  while ( arr.length) {
  newArray.push(arr.splice(0, size));
}
  return newArray;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
