import { createSelector } from 'reselect';
import { todoFilters } from '../constant/todoFilters';

export const getTodoByid = (todos, todoId) => {

    return todos.byIds[todoId];
};
export const getTodoList = (state) => {
    return { todos: state.todos.allIds.map(id => getTodoByid(state.todos, id)), filter: state.visibilityFilter }
};

export const getTodoIndexById = (todos, todoId) => {
    return todos.allIds.indexOf(todoId)
}



export const getTodosByfilter = createSelector(getTodoList,
    state => {
        switch (state.filter) {
            case todoFilters.SHOW_ACTIVE:
                return state.todos.filter(todo => todo.isCompleted === false)
            case todoFilters.SHOW_COMPLETED:
                return state.todos.filter(todo => todo.isCompleted === true)
            default:
                return state.todos
        }
    }
)

