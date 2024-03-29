import { useState } from 'react';
import { getNewQuote, quotes } from './quotes';

const initQuote = quotes[0];

export default Quote;
export function Quote() {
  const [quote, setQuote] = useState(initQuote);

  return (
    <div id="quote-box" data-testid="quote-box">
      <div id="text" data-testid="text">
        {quote.text} 
      </div> 
      <div id="author" data-testid="author">
        {quote.autor}
      </div>
      <button id="new-quote" data-testid="new-quote" onClick={() => {
        setQuote(getNewQuote(quote.text));
      }}>
          New Quote
      </button>

      <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" data-testid="tweet-quote"> Tweet this quote</a>
    </div>
  )
}

