import React from 'react';
import Posts from './Posts';


export const Reddit = ({fetchPosts, posts = [], subredditsNameList, selectedSubreddit, selectsubreddit}) => {
    const [subreddit, setSubreddit] = React.useState('');
    const handleOnkeyUp = e => {
        if(e.keyCode === 13) {
            fetchPosts(subreddit);
            setSubreddit('');
        }

    }
    const handleChangeInput = e => setSubreddit(e.target.value);
    const handleChangeSelect = e => selectsubreddit(e.target.value);
    const changesubreddit = () => {
        fetchPosts(subreddit);
        setSubreddit('');
    };
    return (
        <div>
            <h1>Reddit</h1>
            <input value={subreddit} onChange={handleChangeInput} onKeyUp={handleOnkeyUp} />
            <button onClick={changesubreddit}>add subredit</button>
            <h2>Posts: {selectedSubreddit}</h2>
            <select value={selectedSubreddit} onChange={handleChangeSelect}>
                {subredditsNameList.length > 0 ?
                    subredditsNameList.map((subreddit, index) => <option key={index} value={subreddit}>{subreddit}</option>)
                    :
                    <option value={'default'}>default</option>
                }
            </select>
            <Posts posts={posts} />
        </div>
    )
}