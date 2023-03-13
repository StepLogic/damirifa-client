/**
 * Project: damirifa
 * File: utils
 * Created by Pennycodes on 9/5/2022.
 * Copyright damirifa
 */
import axios from './requests';


export const setToken = (accessToken: string) => {
    if (accessToken !== '') {
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};

