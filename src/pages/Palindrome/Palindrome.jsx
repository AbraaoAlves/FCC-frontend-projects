import { useState } from "react";
import { checkIsPalindrome } from "./utils";

export default function Palindrome() {
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [text, setText] = useState("");

  const handleCheck = () => {
    if (!text) {
      window.alert("Please input a value");
    }
    const isEqual = checkIsPalindrome(text);

    setIsPalindrome(isEqual);
  };
  return (
    <>
      <h1>Palindrome</h1>
      <section>
        Enter in text to check for a palindrome:
        <input
          type="text"
          id="text-input"
          onChange={({ currentTarget: { value } }) => setText(value)}
        />
        <button id="check-btn" onClick={handleCheck}>
          Check
        </button>
        <div id="result" data-testid="result">
          {isPalindrome
            ? text + " is a palindrome"
            : text + " is not a palindrome"}
        </div>
      </section>
    </>
  );
}
