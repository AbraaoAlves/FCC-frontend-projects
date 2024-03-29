import {data} from './quotes.json';

export const quotes = data.map(({quote: text, author}) => ({text, author}));

/**
 * 
 * @param {string} text - text quote
 * @returns {(typeof quotes)[number]}
 */
export function getNewQuote(text){
  const list = quotes.filter(quote => quote.text !== text);
  return list[Math.floor(Math.random() * list.length)];
}  