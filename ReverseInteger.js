/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let original = x;
  const absX = Math.abs(x);
  let result = 0;
  let divisor = 1;
  
  while(divisor <= absX) {
    const digit = Math.floor((absX / divisor) % 10);
    result = (result * 10) + digit;
    divisor *= 10;
  }
  
  if (result < 0 || result > Math.pow(2,31) - 1) {
    return 0;
  }
  
  if (original < 0) {
    result *= -1;
  }
  
  return result;
};