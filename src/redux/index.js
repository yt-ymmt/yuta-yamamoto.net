import { combineReducers } from 'redux';

import counter from './reducers/counter';
import naviItems from './reducers/naviItems';
import snsItems from './reducers/snsItems';
import profileItems from './reducers/profileItems';

export const reducer = combineReducers({
    counter,
    naviItems,
    snsItems,
    profileItems
});
