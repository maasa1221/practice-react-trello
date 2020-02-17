import { Action } from "redux";

export enum ActionNames {
    SET = "table/set"
}

export interface TableState {
}

export const initialState: TableState = {

};

interface SetAction extends Action {
    type: ActionNames.SET;
}

export const set = (): SetAction => ({
    type: ActionNames.SET
});

export type TableActions = SetAction;

export default function reducer(
    state: TableState = initialState,
    action: TableActions
): TableState {
    switch (action.type) {
        default:
            return state;
    }
}