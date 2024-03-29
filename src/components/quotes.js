export const quotes = [
  {
    text: 'conteudo da citação',
    autor: 'autor do citação'
  },
  {
    text: 'conteudo da citação1',
    autor: 'autor do citação1'
  },
  {
    text: 'conteudo da citação2',
    autor: 'autor do citação2'
  },
  {
    text: 'conteudo da citação3',
    autor: 'autor do citação3'
  },
  {
    text: 'conteudo da citação4',
    autor: 'autor do citação3'
  },
  {
    text: 'conteudo da citação5',
    autor: 'autor do citação3'
  }
]

/**
 * 
 * @param {string} text - text quote
 * @returns {(typeof quotes)[number]}
 */
export function getNewQuote(text){
  const list = quotes.filter(quote => quote.text !== text);
  return list[Math.floor(Math.random() * list.length)];
}  