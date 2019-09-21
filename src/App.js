import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import './App.css';
import { HeaderContainer } from  './container/HeaderContainer';
import rootReducers from './reducers/rootReducers';
import { VisibleTodoList } from './container/VisibleTodoList';
import { Footer } from './components/Footer';
import { RedditContainer } from './container/RedditContainer';


const loggerMiddleware = createLogger()
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducers,
    compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            // loggerMiddleware // neat middleware that logs actions
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
/* eslint-enable */

function App() {
    const [count, setCount] = React.useState(1);

    return (
        <div className='d-flex justify-center'>
            <div className="App">
                <Provider store={store}>
                    <HeaderContainer />
                    <VisibleTodoList />
                    <Footer />
                    <RedditContainer />
                    {/* <Test />                        */}
                </Provider>
            {/* <button onClick={() => setCount(count + 1)}>incre</button> */}
            </div>
        </div>
    );
}


export default App;

