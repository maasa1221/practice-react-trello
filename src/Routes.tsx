import { Switch } from "react-router"
import { Route } from "react-router-dom"
import * as React from "react"
import App from "./App/Container"
import Table from "./pages/table/Container"
export const Routes: React.FC<any> = () => {
    return (
        <>
            <App />
            <Switch>
                <Route exact path="/" component={Table} />
                <Route exact path="/table" component={Table} />
            </Switch>
        </>);
};