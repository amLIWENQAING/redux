import { createStore,applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const logger = createLogger();
let store = createStore(rootReducer,composeWithDevTools(),applyMiddleware(logger));

export default store;