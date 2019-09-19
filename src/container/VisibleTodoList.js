import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { removeTodo, togglerTodo } from '../actions/todoActions';
import '../selectors/selectors'
import { getTodosByfilter } from '../selectors/selectors';
const mapStateToProps = (state) => {
    const filteredTodos = getTodosByfilter(state)
    return {todos : filteredTodos};
}

const mapDispatchToProps = {
    removeTodo,
    togglerTodo
}
export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

