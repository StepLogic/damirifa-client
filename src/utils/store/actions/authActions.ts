/**
 * Project: damirifa
 * File: authActions
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import * as types from "./types";
import {
  ILoginResponse,
  RegisterRequestState,
  SocialLoginState,
} from "@lib/interface/auth";
import { ICommonResponse } from "@lib/interface/common";

/**
 * Request Login Action
 * @param user_id
 * @param password
 * @param captcha
 * @returns {{type: string, user_id: string, password: string}}
 */

export function requestLogin(user_id: string, password: string, captcha: string | number) {
  return {
    type: types.LOGIN_REQUEST,
    user_id,
    password,
    captcha
  };
}

/**
 * Request OTP Verification Action
 * @param code
 * @returns {{type: string, code: string}}
 */

export function requestVerification(code: string) {
  return {
    type: types.VERIFY_REQUEST,
    code,
  };
}

/**
 * Request Login Action
 * @param body
 * @returns {{type: string, body: RegisterRequestState}}
 */

export function requestOTP(body: RegisterRequestState) {
  return {
    type: types.OTP_REQUEST,
    ...body,
  };
}

/**
 * Request Social Login Action
 * @param body
 * @returns {{type: string, body: SocialLoginState}}
 */

export function requestSocialLogin(body: SocialLoginState) {
  return {
    type: types.SOCIAL_LOGIN_REQUEST,
    ...body,
  };
}

/**
 * Request Registration Action
 * @param body
 * @returns {{type: string, body: RegisterRequestState}}
 */

export function requestRegister(body: RegisterRequestState) {
  return {
    type: types.REGISTER_REQUEST,
    ...body,
  };
}

/**
 * Login Success Response Action
 * @param response
 * @returns {{type: string, response: ILoginResponse}}
 */
export function onLoginResponse(response: ILoginResponse) {
  return {
    type: types.LOGIN_RESPONSE,
    ...response,
  };
}

/**
 * Login Failed Response Action
 * @param body
 * @returns {{type: string, response: ILoginResponse}}
 */
export function loginFailed(body: ICommonResponse) {
  return {
    type: types.LOGIN_FAILED,
    ...body,
  };
}

/**
 * Login Successful Action
 * @returns {{type: string}}
 */
export function resetStatus() {
  return {
    type: types.COMMON_RESPONSE,
    message: "",
    status: 100,
  };
}

/**
 * Set Social Login Provider
 * @returns {{type: string}}
 */
export function setProvider(provider: string) {
  return {
    type: types.SET_PROVIDER,
    provider,
  };
}

/**
 * User Logout Action
 * @returns {{type: string}}
 */
export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
