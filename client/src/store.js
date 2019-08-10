import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// reducers will go here
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import saleList from './reducers/saleList'
import saleForm from './reducers/saleForm'
import saleUpdate from './reducers/saleUpdate'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  saleList,
  saleForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
