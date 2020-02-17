import { connect } from "react-redux";
import { ReduxState, ReduxAction } from "../Store";
import { Dispatch } from "react";
import { App } from "./App"

export class ActionDispatcher {
    dispatch: (action: any) => any;

    constructor(dispatch: (action: any) => any) {
        this.dispatch = dispatch;
    }
}

export default connect(
    (state: ReduxState) => ({ value: state.app }),
    (dispatch: Dispatch<ReduxAction>) => ({
        actions: new ActionDispatcher(dispatch)
    })
)(App);