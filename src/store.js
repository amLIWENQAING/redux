import { createStore,applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
const logger = createLogger();
let store = createStore(rootReducer,composeWithDevTools(),applyMiddleware(thunk,promiseMiddleware,logger));

export default store;