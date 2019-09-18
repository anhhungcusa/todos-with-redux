import { connect } from 'react-redux';

import { togglerAllTodo, addTodo } from '../actions/todoActions';
import { Header } from '../components/Header';

export const HeaderContainer = connect(null, { togglerAllTodo, addTodo })(Header);