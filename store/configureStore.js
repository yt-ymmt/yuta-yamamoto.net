import { createStore } from 'redux';
import reducer from './reducer';

function configureStore(initialState, isServer) {
    if (isServer && typeof window === 'undefined') {
        return createStore(reducer, initialState);
    } else {
        if (!window.store) {
            window.store = createStore(reducer, initialState);
        }
    }

    return window.store;
}

export default configureStore;
