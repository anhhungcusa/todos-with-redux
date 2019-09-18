import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { removeTodo } from '../actions/todoActions';

const mapStateToProps = (state) => {
    console.log('mapTodo run')
    return {...state.todos}
}

const mapDispatchToProps = {
    removeTodo    
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

