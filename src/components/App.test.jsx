import '@testing-library/jest-dom'
import {expect, test} from 'vitest';
import {render, act} from '@testing-library/react'

import {App} from './App';

test('App can render', () => {
  const result = render(<App />)
  expect(result.container).toBeInTheDocument();
});

test('eu consigo ver um elemento wrapper com o id="quote-box" correspondente.', () => {
  const result = render(<App />);
  const wrapper = result.getByTestId('quote-box');

  expect(wrapper).toBeInTheDocument();
});

test('dentro de #quote-box, eu consigo ver um elemento com o id="text" correspondente.', () => {
  const result = render(<App />);
  const wrapper = result.getByTestId('quote-box');
  
  const text = wrapper.querySelector('#text');

  expect(text).toBeInTheDocument();
});

test('dentro de #quote-box, eu consigo ver um elemento com o id="author" correspondente.', () => {
  const result = render(<App />);
  const wrapper = result.getByTestId('quote-box');
  
  const author = wrapper.querySelector('#author');

  expect(author).toBeInTheDocument();
});

test('dentro de #quote-box, eu consigo ver um elemento clicável com o id="new-quote" correspondente.', () => {
  const result = render(<App />);
  const wrapper = result.getByTestId('quote-box');
  
  const newQuote = wrapper.querySelector('button#new-quote');

  expect(newQuote).toBeInTheDocument();
});

test('dentro de #quote-box, eu consigo ver um elemento clicável a com o id="tweet-quote" correspondente.', () => {
  const result = render(<App />);
  const wrapper = result.getByTestId('quote-box');
  
  const tweetQuote = wrapper.querySelector('a#tweet-quote');

  expect(tweetQuote).toBeInTheDocument();
});

test('ao carregar pela primeira vez, minha máquina de citação exibe uma citação aleatória no elemento com id="text"', () => {
  const result = render(<App />);
  const text = result.getByTestId('text');

  expect(text).toBeInTheDocument();
  expect(text.textContent).not.toBe('');
})

test('ao carregar pela primeira vez, minha máquina de citação exibe o autor da citação aleatória no elemento com id="author".', () => {
  const result = render(<App />);
  const author = result.getByTestId('author');

  expect(author).toBeInTheDocument();
  expect(author.textContent).not.toBe('');
})

test('quando o botão #new-quote é clicado, minha máquina de citação deve buscar uma nova citação e exibi-la no elemento #text.', () => {
  const result = render(<App />);
  const newQuote = result.getByTestId('new-quote');
  const text = result.getByTestId('text');

  const firstText = text.textContent;

  act(() => newQuote.click());

  expect(text.textContent).not.toBe(firstText);
});

test('minha máquina de citação deve buscar o novo autor da citação quando o botão #new-quote for clicado e o exibir no elemento #author.', () => {
  const result = render(<App />);
  const newQuote = result.getByTestId('new-quote');
  const author = result.getByTestId('author');

  const firstAuthor = author.textContent;

  act(() => newQuote.click());

  expect(author.textContent).not.toBe(firstAuthor);
});

test('eu posso tweetar a citação atual ao clicar no elemento #tweet-quote a. Esse elemento a deve incluir o caminho "twitter.com/intent/tweet" no seu atributo href para tweetar a citação atual.', () => {
  const result = render(<App />);
  const tweetQuote = result.getByTestId('tweet-quote');

  expect(tweetQuote).toBeInTheDocument();
  expect(tweetQuote).toHaveAttribute('target', '_blank');
  expect(tweetQuote).toHaveAttribute('href', 'https://twitter.com/intent/tweet');
})


test('quando o botão #new-quote é clicado, minha máquina de citação deve buscar uma nova citação e exibi-la no elemento #text.', () => {
  const result = render(<App />);
  const newQuote = result.getByTestId('new-quote');
  const text = result.getByTestId('text');

  const firstText = text.textContent;

  act(() => newQuote.click());
  const secondText = text.textContent;

  expect(text.textContent).not.toBe(firstText);
  
  act(() => newQuote.click());
  
  expect(text.textContent).not.toBe(secondText);
});