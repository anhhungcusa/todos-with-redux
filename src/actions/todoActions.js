import { actionTypes } from '../constant/actionTypes';




/**
 * action creator
 */

const addTodo = title => (
    {
        type: actionTypes.ADD_TODO,
        title
    }
)

const removeTodo = todoId => (
    {
        type: actionTypes.REMOVE_TODO,
        todoId
    }
)

const editTodo = (todoId, title) => (
    {
        type: actionTypes.EDIT_TODO,
        todoId,
        title
    }
)
const togglerTodo = todoId => (
    {
        type: actionTypes.TOGGLER_TODO,
        todoId
    }
)

const togglerAllTodo = () => ({ type: actionTypes.TOGGLER_ALL_TODO })

const setVisibilityFilter = filter => (
    {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter
    }
)

export { addTodo, removeTodo, editTodo, togglerTodo, togglerAllTodo, setVisibilityFilter }