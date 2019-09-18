import { actionTypes } from '../constant/actionTypes';




/**
 * action creator
 */

export const addTodo = title => (
    {
        type: actionTypes.ADD_TODO,
        title
    }
)

export const removeTodo = todoId => (
    {
        type: actionTypes.REMOVE_TODO,
        todoId
    }
)

export const editTodo = (todoId, title) => (
    {
        type: actionTypes.EDIT_TODO,
        todoId,
        title
    }
)
export const togglerTodo = todoId => (
    {
        type: actionTypes.TOGGLER_TODO,
        todoId
    }
)

export const togglerAllTodo = () => ({ type: actionTypes.TOGGLER_ALL_TODO })

export const setVisibilityFilter = filter => (
    {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter
    }
)
