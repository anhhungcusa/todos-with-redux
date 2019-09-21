import { connect } from 'react-redux';
import { Reddit } from '../components/Reddit';
import { fetchPosts, selectsubreddit } from '../actions/redditAction';
import { getSubredditsName, getPostsBySelectedSubReddit } from '../selectors/selectors';


const mapState = state => {
    const subredditsNameList =  getSubredditsName(state.reddit);
    const posts = getPostsBySelectedSubReddit(state.reddit);
    return {
        subredditsNameList,
        posts,
        selectedSubreddit: state.reddit.selectedSubreddit
    }
}


export const RedditContainer =  connect(mapState, {fetchPosts, selectsubreddit})(Reddit)