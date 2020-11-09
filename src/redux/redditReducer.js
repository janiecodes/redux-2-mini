import axios from 'axios';

const initialState = {
    loading: false, 
    articles: []
}

//Initial State
const REQUEST_ARTICLES = "REQUEST_ARTICLES";

//Action Creator that returns an action (object with properties type and payload)
//The type property will hold the action type that was created
//The payload property will be the result of the axios request
//No .catch bc we will do it in another special way - an alternative way to handle the promise
export function requestArticles(){
    let articles = axios.get('/api/reddit').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

//A SIMPLE REDUCER FUNCTION 
//The switch statement is kind of like our .then and .catch
//initialState is an actual assignment 
export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_ARTICLES + '_Pending': //the semicolon is read as THEN like in an IF statement
            return{...state, loading: true}
        case REQUEST_ARTICLES + '_REJECTED':
            return{...state, loading: false}
        case REQUEST_ARTICLES + '_FULFILLED':
            return{...state, loading: false, articles: action.payload}; //payload is coming from requestArticles function on Line 21
        default:
            return state
    }
}