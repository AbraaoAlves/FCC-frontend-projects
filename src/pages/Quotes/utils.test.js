import { getNewQuote } from "./utils";


describe('getNewQuote', () => {
  test('should return a new quote', () => {
    const quote = 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.';
    const newQuote = getNewQuote(quote);

    expect(newQuote).toHaveProperty('text');
    expect(newQuote).not.toHaveProperty('text', quote);
  });
  
  test('should return a new quote if current quote is not found', () => {
    const quote = 'Quote not found';
    const newQuote = getNewQuote(quote);
    
    expect(newQuote).toHaveProperty('text');
    expect(newQuote).not.toHaveProperty('text', quote);
  });
});
