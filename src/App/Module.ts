import { Action } from "redux";

export enum ActionNames {
    SET = "app/set"
}

export interface AppState {
}

export const initialState: AppState = {

};

interface SetAction extends Action {
    type: ActionNames.SET;
}

export const set = (): SetAction => ({
    type: ActionNames.SET
});

export type AppActions = SetAction;

export default function reducer(
    state: AppState = initialState,
    action: AppActions
): AppState {
    switch (action.type) {
        default:
            return state;
    }
}