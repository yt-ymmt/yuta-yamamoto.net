import { combineReducers } from 'redux';

import naviItems from './reducers/naviItems';
import snsItems from './reducers/snsItems';
import profileItems from './reducers/profileItems';

export const reducer = combineReducers({
    naviItems,
    snsItems,
    profileItems
});
