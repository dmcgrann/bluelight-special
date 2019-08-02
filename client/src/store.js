import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// reducers will go here
import currentUser from './reducers/currentUser'
import login from './reducers/login'
import signup from './reducers/signup'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  currentUser,
  login,
  signup
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
