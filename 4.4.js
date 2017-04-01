function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null ||  b == null || typeof a != "object" ||
      typeof b != "object")
    return false;
  
  var propertiesA = 0, propertiesB = 0;

  for (var prop in a)
    propertiesA += 1;

  for (var prop in b) {
    propertiesB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propertiesA == propertiesB;
}