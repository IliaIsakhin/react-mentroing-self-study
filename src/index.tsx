import * as React from "react"
import * as ReactDOM from 'react-dom'
import './less/styles.less'
import 'normalize.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers"
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import { getMoviesAcionCreator } from "./actions"
import {createLogger} from 'redux-logger'

const enchancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;

const store = enchancer(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger())
)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("app"))

store.dispatch(getMoviesAcionCreator())