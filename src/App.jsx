import { newQuote} from './redux/quote.js';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'

function App() {
  
  const quote = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNewQuote = ()=>{
    dispatch(newQuote());
  }

  return (
      <div id="quote-box">
        <div className="card card-body">
          <h2 id="text">
            {quote.text}
          </h2>
          <p id="author">{quote.author}</p>
        </div>
        <div>
          <button className="btn btn-link " id="new-quote" onClick={ handleNewQuote}>Next Quote</button>
          <a 
            href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`} 
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tweet this quote"
            className='btn btn-primary btn-sm'>
            Tweet
          </a>
        </div>
      </div>
   
  )
}

export default App;