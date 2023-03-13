/**
 * Project: damirifa
 * File: commonActions
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import {ICommonResponse} from "@lib/interface/common";
import * as types from "./types";

/**
 * Common API Success Response Action
 * @param response
 * @returns {{type: string, response: ICommonResponse}}
 */
export function commonResponse(response: ICommonResponse) {
    return {
        type: types.COMMON_RESPONSE,
        ...response,
    };
}

/**
 * Enable Loader Action
 * @returns {{type: string}}
 */
export function enableLoader() {
    return {
        type: types.ENABLE_LOADER,
    };
}

/**
 * Disable Loader Action
 * @returns {{type: string}}
 */
export function disableLoader() {
    return {
        type: types.DISABLE_LOADER,
    };
}
