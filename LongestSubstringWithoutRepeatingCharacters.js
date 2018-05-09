/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0, i = 0, j = 0;
  const string = s.split('');
  const seen = new Map();
  const len = s.length;
  
  while(i < len && j < len) {
    if (!seen.has(string[j])) {
      seen.set(string[j++], 1);
      result = Math.max(result, j-i);
    } else {
      seen.delete(string[i++]);
    }
  }
  
  return result;
};