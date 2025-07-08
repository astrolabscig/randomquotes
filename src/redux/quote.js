import quotes from '../assets/quotes.json';
import {configureStore} from '@reduxjs/toolkit';

const NEW_QUOTE = 'NEW_QUOTE';

const getRandomQuote = () => quotes[Math.floor(Math.random()*quotes.length)];

const initState = getRandomQuote();

const newQuote = ()=>({
    type: NEW_QUOTE,
});

const quoteReducer = (state=initState, action)=>{
    switch(action.type){
        case NEW_QUOTE:
            return getRandomQuote();
        default:
            return state;
    }
};

const store = configureStore({reducer:quoteReducer});
export {newQuote, quoteReducer};
export default store;