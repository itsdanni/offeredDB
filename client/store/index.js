/**
 * export and import hub for all things store related
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import companies from './companies';

const reducer = combineReducers({ companies })
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, composeWithDevTools(middleware))

export default store;

// export all reducers
export * from './companies';


