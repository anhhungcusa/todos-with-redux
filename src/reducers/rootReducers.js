import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import redditReducer from './redditRequest';

const rootReducers = combineReducers({
    todos,
    visibilityFilter,
    reddit: redditReducer
});
export default rootReducers;

