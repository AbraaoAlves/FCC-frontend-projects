import { useRef, useState } from "react";

export default function Palindrome() {
  const inputref = useRef(/** @type {HTMLInputElement | null} */ (null));
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleCheck = () => {
    const isEqual = checkIsPalindrome(inputref.current?.value);

    setIsPalindrome(isEqual);

    if (!isEqual) {
      window.alert("Please input a value");
    }
  };
  return (
    <>
      <h1>Palindrome</h1>
      <section>
        Enter in text to check for a palindrome:
        <input ref={inputref} type="text" id="text-input" />
        <button id="check-btn" onClick={handleCheck}>
          Check
        </button>
        <div id="result" data-testid="result">
          {isPalindrome
            ? inputref.current?.value + " is a palindrome"
            : "Is not a palindrome"}
        </div>
      </section>
    </>
  );
}

/**
 *
 * @param {string} [value='']
 * @returns {boolean}
 */
function checkIsPalindrome(value = "") {
  const valueToCompare = value.replace(/_/g, "").replace(/ /g, "");
  return (
    valueToCompare.length > 0 &&
    valueToCompare === valueToCompare.split("").reverse().join("")
  );
}
