/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import {all} from "redux-saga/effects";
import authSaga from "./authSaga";
// import homepageSaga from './homepageSaga';

export default function* watch() {
    yield all([
        authSaga(),
        // homepageSaga()
    ]);
}
