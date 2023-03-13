/**
 * Project: damirifa
 * File: support
 * Created by Pennycodes on 8/25/2022.
 * Copyright damirifa
 */
import ApiConfig from "./config";
import apiClient from "./requests";
import { AxiosResponse } from "axios";

/**
 * This function fetches notices
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function postSupport(
  cancelToken: any,
  payload: any
): Promise<AxiosResponse<any, any>> {
  return apiClient.post(ApiConfig.GENERAL.SUPPORT, payload, {
    cancelToken: cancelToken,
  });
}
