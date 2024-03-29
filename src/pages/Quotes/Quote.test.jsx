
import {render, act, fireEvent} from '@testing-library/react'
import {Quote} from './Quote';

test('App can render', () => {
  const result = render(<Quote />)
  expect(result.container).toBeInTheDocument();
});

test('I can see a wrapper element with a corresponding id="quote-box".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId('quote-box');

  expect(wrapper).toBeInTheDocument();
});

test('Within #quote-box, I can see an element with a corresponding id="text".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId('quote-box');
  
  const text = wrapper.querySelector('#text');

  expect(text).toBeInTheDocument();
});

test('Within #quote-box, I can see an element with a corresponding id="author".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId('quote-box');
  
  const author = wrapper.querySelector('#author');

  expect(author).toBeInTheDocument();
});

test('Within #quote-box, I can see a clickable element with a corresponding id="new-quote".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId('quote-box');
  
  const newQuote = wrapper.querySelector('button#new-quote');

  expect(newQuote).toBeInTheDocument();
});

test('Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".', () => {
  const result = render(<Quote />);
  const wrapper = result.getByTestId('quote-box');
  
  const tweetQuote = wrapper.querySelector('a#tweet-quote');

  expect(tweetQuote).toBeInTheDocument();
});

test('On first load, my quote machine displays a random quote in the element with id="text".', () => {
  const result = render(<Quote />);
  const text = result.getByTestId('text');

  expect(text).toBeInTheDocument();
  expect(text.textContent).not.toBe('');
})

test('On first load, my quote machine displays the random quote\'s author in the element with id="author".', () => {
  const result = render(<Quote />);
  const author = result.getByTestId('author');

  expect(author).toBeInTheDocument();
  expect(author.textContent).not.toBe('');
})

test('When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.', () => {
  const result = render(<Quote />);
  const newQuote = result.getByTestId('new-quote');
  const text = result.getByTestId('text');

  const firstText = text.textContent;

  act(() => fireEvent.click(newQuote));

  expect(text.textContent).not.toBe(firstText);
});

test(' My quote machine should fetch the new quote\'s author when the #new-quote button is clicked and display it in the #author element.', () => {
  const result = render(<Quote />);
  const newQuote = result.getByTestId('new-quote');
  const author = result.getByTestId('author');

  const firstAuthor = author.textContent;

  act(() => fireEvent.click(newQuote));

  expect(author.textContent).not.toBe(firstAuthor);
});

test('I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.', () => {
  const result = render(<Quote />);
  const tweetQuote = result.getByTestId('tweet-quote');

  expect(tweetQuote).toBeInTheDocument();
  expect(tweetQuote).toHaveAttribute('target', '_blank');
  expect(tweetQuote).toHaveAttribute('href', 'https://twitter.com/intent/tweet');
})


test('When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.', () => {
  const result = render(<Quote />);
  const newQuote = result.getByTestId('new-quote');
  const text = result.getByTestId('text');

  const firstText = text.textContent;
  act(() => fireEvent.click(newQuote));

  const secondText = text.textContent;
  act(() => fireEvent.click(newQuote));
  
  expect(firstText).not.toBe(secondText);
  expect(text.textContent).not.toBe(secondText);
});