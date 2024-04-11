import { useRef } from "react";

export default function Palindrome() {
  const inputref = useRef(/** @type {HTMLInputElement | null} */ (null));

  const handleCheck = () => {
    const isPalindrome = inputref.current?.value === "A";

    if (!isPalindrome) {
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
        <div id="result" data-testid="result"></div>
      </section>
    </>
  );
}
