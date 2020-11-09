import {createStore, applyMiddleware, combineReducers}  from 'redux';
//midleware is like a filter/middle man between our action and reducer
import promiseMiddleware from 'redux-promise-middleware';
//asynchronous code will wait on a response whether it's response is fulfilled, pending or it's rejected
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import redditReducer from './redditReducer'

//Combining reducers - import combineReducers then create a variable
const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
})




//This is what invokes createStore pssing in the reducer as the only argument
//The createStore function from redux creates a placeholder for our state
//The store talks to our reducer
//store is the middle man that all our components talk to

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

//we changed hackerNewsReducer to rootReducer after we combined the second reducer (mediumReducer)