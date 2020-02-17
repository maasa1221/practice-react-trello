import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from "./Store"
import { Provider } from "react-redux"
import { Routes } from "./Routes"
import { HashRouter } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </HashRouter>
    </Provider>
    , document.getElementById('app'));


