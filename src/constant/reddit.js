const demoData = {
    selectedsubreddit: 'frontend',
    entities: {
        users: {
            2: {
                id: 2,
                name: 'Andrew'
            }
        },
        posts: {
            42: {
                id: 42,
                title: 'Confusion about Flux and Relay',
                author: 2
            },
            100: {
                id: 100,
                title: 'Creating a Simple Application Using React JS and Flux Architecture',
                author: 2
            }
        }
    },
    postsBysubreddit: {
        frontend: {
            isFetching: true,
            didInvalidate: false,
            items: []
        },
        reactjs: {
            isFetching: false,
            didInvalidate: false,
            lastUpdated: 1439478405547,
            items: [42, 100]
        }
    }
}


export const SELECT_subreddit = 'SELECT_subreddit';
export const INVALIDATE_subreddit = 'INVALIDATE_subreddit';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const STOP_POSTS_REQUEST = 'STOP_POSTS_REQUEST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';