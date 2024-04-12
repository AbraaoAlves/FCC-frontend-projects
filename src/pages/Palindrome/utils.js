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
  return value.split("").reverse().join("");
}
