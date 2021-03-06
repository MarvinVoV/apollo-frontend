import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers/RootReducer";
// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';
// redux-thunk is a middleware that lets you dispatch async actions
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
