import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// reducers will go here

import thunk from 'redux-thunk'


const reducer = combineReducers({
  // reducers here
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
