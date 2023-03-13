/**
 * Project: damirifa
 * File: loadingReducer
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import createReducer from "@lib/createReducer";
import * as types from "../actions/types";
import {ILoading} from "@lib/interface/common";

const initialState: ILoading = {
    isLoading: false,
};

const loadingReducer = createReducer(initialState, {
    [types.ENABLE_LOADER](state: ILoading) {
        return {...state, isLoading: true};
    },
    [types.DISABLE_LOADER](state: ILoading) {
        return {...state, isLoading: false};
    },
});
export default loadingReducer;
