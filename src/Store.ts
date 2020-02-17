import { createStore, combineReducers, Action, applyMiddleware } from "redux"
import { routerMiddleware, connectRouter } from "connected-react-router"
import { createHashHistory } from "history"
import app, { AppActions, AppState } from "./App/Module"
import table, { TableActions, TableState } from "./pages/table/Module"


export const history = createHashHistory();

const createRootReducer = () =>
    createStore(combineReducers({
        router: connectRouter(history),
        app,
        table
    }), applyMiddleware(routerMiddleware(history)));

export default createRootReducer;

export type ReduxState = {
    app: AppState;
    table: TableState;
};

export type ReduxAction = | AppActions | TableActions | Action;

