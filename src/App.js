import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import { HeaderContainer } from  './container/HeaderContainer';
import rootReducers from './reducers/rootReducers';
import { VisibleTodoList } from './container/VisibleTodoList';
import { Footer } from './components/Footer';

// import counterReducer from './reducers/counterReducer';
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

function App() {
    return (
        <div className='d-flex justify-center'>
            <div className="App">
                <Provider store={store}>
                    <HeaderContainer />
                    <VisibleTodoList />
                    <Footer />
                </Provider>

            </div>
        </div>
    );
}


export default App;

