import { applyMiddleware, createStore } from 'redux';
import Logger from 'redux-logger';
import { reducer } from './redux';

export const getStore = (initialState, isServer) => {
    const middlewares = [];
    middlewares.push(Logger);

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    if (isServer && typeof window === 'undefined') {
        return store;
    } else {
        if (!window.store) {
            window.store = store;
        }
    }

    return window.store;
};
