/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let count = 1;
  const original = A;
  
  for(;A.length < B.length; count++) A += original;
  if (A.includes(B)) return count;
  if ((A+A).includes(B)) return count + 1;
  
  return -1;
};