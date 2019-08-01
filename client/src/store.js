import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// reducers will go here
import users from './reducers/users'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  // reducers here
  users
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
