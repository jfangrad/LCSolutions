/**
 * @param {string} s
 * @return {boolean}
 */

const validOpen = ['(', '[', '{'];
const validClose = [')', ']', '}'];

var isValid = function(s) {
    let values = [];

    for(let i = 0; i < s.length; ++i) {
      const element = s.charAt(i);
      if (validOpen.includes(element)) {
        values.push(element);
      } else if (validClose.includes(element)) {
        const index = validClose.indexOf(element);
        if (values.pop() !== validOpen[index]) {
          return false;
        }
      }
    }

    return values.length === 0;
};
