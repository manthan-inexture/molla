import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import fetchReducer from '../redux/fetchReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ fetchReducer })
// parameters (rootreducer, initialstate, composeWithDevtools(applyMiddleware(hunk)))
const store = createStore(rootReducer, applyMiddleware(thunk));
 export default store;

