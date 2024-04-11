export default function Palindrome() {
  return (
    <>
      <h1>Palindrome</h1>
      <section>
        Enter in text to check for a palindrome:
        <input type="text" id="text-input" />
        <button
          id="check-btn"
          onClick={() => window.alert("Please input a value")}
        >
          Check
        </button>
        <div id="result" data-testid="result"></div>
      </section>
    </>
  );
}
