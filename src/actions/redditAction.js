import Axios from 'axios';

import {
    SELECT_subreddit,
    INVALIDATE_subreddit,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    STOP_POSTS_REQUEST
} from '../constant/reddit'
export const selectsubreddit = (subreddit) => (
    {
        type: SELECT_subreddit,
        subreddit
    }
)

export const invalidatesubreddit = (subreddit) => (
    {
        type: INVALIDATE_subreddit,
        subreddit
    }
)

export const requestPost = (subreddit) => (
    {
        type: REQUEST_POSTS, 
        subreddit
    }
)

export const stopPostRequest = (subreddit) => (
    {
        type: STOP_POSTS_REQUEST, 
        subreddit
    }
)

export const receivePost = (subreddit, posts) => (
    {
        type: RECEIVE_POSTS,
        subreddit,
        receivedAt: Date.now(),
        posts 
    }
)


export const fetchPosts = subreddit => {

    return dispatch => {
        dispatch(requestPost(subreddit));
        Axios({
            method: 'get',
            url: `https://www.reddit.com/r/${subreddit}.json`,
            responseType: 'json'
        })
            .then(respone => {
                // debugger
                const posts = respone.data.data.children.map(child => child.data);
                dispatch(receivePost(subreddit, posts))
            }) 
            .catch(err => {
                dispatch(stopPostRequest(subreddit));
                throw err
            })
            .finally((err) => console.log('success'))      
    }
}