import { combineReducers } from 'redux'
import {
    SELECT_subreddit,
    INVALIDATE_subreddit,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    STOP_POSTS_REQUEST
} from '../constant/reddit'

function selectedsubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_subreddit:
            return action.subreddit
        default:
            return state
    }
}

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_subreddit:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })  
        case STOP_POSTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            const newState = Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
            return newState;
        default:
            return state
    }
}

function postsBysubreddit(state = {}, action) {
    switch (action.type) {
        case STOP_POSTS_REQUEST:
            const newState = {...state};
            delete newState[action.subreddit]
            return newState;
        case INVALIDATE_subreddit:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

const redditReducer = combineReducers({
    postsBysubreddit,
    selectedSubreddit: selectedsubreddit
})

export default redditReducer