import { useState } from 'react';
import './App.css'

const quotes = [
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
  }
]

const initQuote = {
  text: 'conteudo da citação',
  autor: 'autor do citação'
}
export function App() {
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
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex]);
      }}>

      </button>

      <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" data-testid="tweet-quote"> twittar</a>
    </div>
  )
}