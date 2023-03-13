/**
 * Project: damirifa
 * File: createReducer
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */

/*
 * Will dynamically create reducers
 * enforcing a unique way to describe reducers
 */
export default function createReducer(initialState: any, handlers: any) {
    return function reducer(state = initialState, action: any) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
