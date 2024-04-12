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
    valueToCompare === valueToCompare.split("").reverse().join("")
  );
}
