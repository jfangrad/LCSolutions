/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let count = 1;
  const original = A;
  const test = A + A;
  
  if(!B.includes(A) && !A.includes(B) && !test.includes(B)) {
    return -1;
  }
  
  if(test.includes(B) && !A.includes(B)) return 2;
  
  while(A.length <= B.length + original.length) {
    if(A.includes(B)) {
      break;
    }
    count++;
    A = A + original;
  }
  
  if(!A.includes(B)) return -1;
  
  return count;
};