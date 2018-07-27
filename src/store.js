import { applyMiddleware, createStore } from 'redux';
import Logger from 'redux-logger';
import { reducer } from './redux';

export const initializeStore = initialState => {
    const middlewares = [];
    middlewares.push(Logger);

    return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
