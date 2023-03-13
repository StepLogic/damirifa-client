/**
 * Project: damirifa
 * File: auth
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import ApiConfig from "./config";
import apiClient from "./requests";
import { RegisterRequestState, SocialLoginState } from "@lib/interface/auth";
import { AxiosResponse } from "axios";

/**
 * Login User API Request
 * @param user_id
 * @param password
 * @param captcha
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function loginUser(
  user_id: string,
  password: string,
  captcha: string | number
): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.USER.LOGIN, { user_id, password, captcha });
}

/**
 * User Registration API Request
 * @param body
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function registerUser(
  body: RegisterRequestState
): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.USER.REGISTER, body);
}

/**
 * User Social Login API Request
 * @param body
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function socialLogin(
  body: SocialLoginState
): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.USER.SOCIAL_LOGIN, body);
}

/**
 * User Verify OTP Login
 * @param code
 * @returns {Promise<AxiosResponse<any, any>>}
 */

export function verifyOTP(code: string): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.USER.VERIFY_OTP, { code });
}

/**
 * User Login Request OTP
 * @param body
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function sendOTP(
  body: RegisterRequestState
): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.USER.SEND_OTP, body);
}
/**
 * It returns a promise that resolves to an AxiosResponse object
 * @returns A promise that resolves to an AxiosResponse
 */
export function fetchCountries(): Promise<AxiosResponse<any, any>> {
  return apiClient.get(ApiConfig.GENERAL.UTILS.COUNTRIES);
}


/**
 * This function fetches captcha
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export async function fetchCaptcha(): Promise<AxiosResponse<any, any>> {

  return await apiClient.get(ApiConfig.USER.CAPTCHA);
}
