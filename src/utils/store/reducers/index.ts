/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import {combineReducers} from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";


const rootReducers = combineReducers({
    loading: loadingReducer,
    auth: authReducer,
});

export default rootReducers;
