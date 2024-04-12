/**
 *
 * @param {string} [value='']
 * @returns {boolean}
 */
export function checkIsPalindrome(value = "") {
  const valueToCompare = value
    .replace(/_/g, "")
    .replace(/ /g, "")
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/-/g, "")
    .toLowerCase();

  return (
    valueToCompare.length > 0 &&
    valueToCompare === getPalindrome(valueToCompare)
  );
}

/**
 *
 * @param {string} [value = '']
 * @returns {string}
 */
export function getPalindrome(value = "") {
  let chars = value.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  return chars.join("");
}
