/**
 * Project: damirifa
 * File: authReducer
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */

import createReducer from "@lib/createReducer";
import * as types from "../actions/types";
import {IAuthState, ILoginResponse} from "@lib/interface/auth";
import {ICommonResponse, ILoading} from "@lib/interface/common";

const initialState: IAuthState = {
    isLoggedIn: false,
    token: "",
    message: "",
    provider: "",
    status: 100,

};
const authReducer = createReducer(initialState, {
    [types.LOGIN_RESPONSE](state: IAuthState, action: ILoginResponse) {

        return {
            ...state,
            token: action.token,
            message: action.message,
            status: action.status,
            is_new: action.is_new,
            isLoggedIn: true,
            user: {...action.data}

        };
    },
    [types.SET_PROVIDER](state: IAuthState, action: { provider: string }) {
        return {
            ...state,
            provider: action.provider,
        };
    },
    [types.LOGIN_FAILED](state: IAuthState, action: ICommonResponse) {
        return {
            ...state,
            message: action.message,
            status: action.status,
            isLoggedIn: false,
        };
    },
    [types.COMMON_RESPONSE](state: IAuthState, action: ICommonResponse) {
        return {
            ...state,
            message: action.message,
            status: action.status,
        };
    },
    [types.LOG_OUT](state: IAuthState) {
        return {
            ...state,
            phone: "",
            token: "",
            message: "",
            user: {},
            status: 100,
            provider: "",
            isLoggedIn: false,
        };
    },
});
export default authReducer;
