import { createSelector } from 'reselect';
import { todoFilters } from '../constant/todoFilters';

export const getTodoByid = (todos, todoId) => {

    return todos.byIds[todoId];
};
export const getTodoList = state => state.todos.allIds.map(id => getTodoByid(state.todos, id))


export const getVisibilityFilter = state => state.visibilityFilter;

export const getTodoIndexById = (todos, todoId) => {
    return todos.allIds.indexOf(todoId)
}



export const getTodosByfilter = createSelector([getTodoList, getVisibilityFilter],
    (todos, filter) => {
        switch (filter) {
            case todoFilters.SHOW_ALL:
                return todos
            case todoFilters.SHOW_ACTIVE:
                return todos.filter(todo => todo.isCompleted === false)
            case todoFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.isCompleted === true)
            default:
                throw new Error(`Unknow filter: ${filter}`)
        }
    }
)

export const getSubredditsName = reddit => Object.keys(reddit.postsBysubreddit);

export const getPostsBySelectedSubReddit = reddit => reddit.postsBysubreddit && reddit.postsBysubreddit[reddit.selectedSubreddit] ? reddit.postsBysubreddit[reddit.selectedSubreddit].items : [];
