import { useState } from 'react';
import { getNewQuote, quotes } from './utils';
import { Box, BoxAuthor, BoxButton, BoxText } from '../../components/Box';

const initQuote = quotes[0];

export default Quote;
export function Quote() {
  const [quote, setQuote] = useState(initQuote);

  return (
    <Box id="quote-box" data-testid="quote-box">
      <BoxText id="text" data-testid="text">
        {quote.text} 
      </BoxText> 
      <BoxAuthor id="author" data-testid="author">
        {quote.author}
      </BoxAuthor>
      <BoxButton id="new-quote" data-testid="new-quote" onClick={() => {
        setQuote(getNewQuote(quote.text));
      }}>
          New Quote
      </BoxButton>

      <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" data-testid="tweet-quote"> Tweet this quote</a>
    </Box>
  )
}

