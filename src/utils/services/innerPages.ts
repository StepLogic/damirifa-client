/**
 * Project: damirifa
 * File: innerPages
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
export function fetchOneWeek(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  const config = {
    products: [
      {
        id: "one-week",
        features: true,
        data: true,
      },
    ],
  };
  return apiClient.post(ApiConfig.GENERAL.HOMEPAGE.PRODUCTS, config, {
    cancelToken: cancelToken,
  });
}
export function fetchDeathNotices(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  const config = {
    products: [
      {
        id: "death-notice",
        features: true,
        data: true,
      },
    ],
  };
  return apiClient.post(ApiConfig.GENERAL.HOMEPAGE.PRODUCTS, config, {
    cancelToken: cancelToken,
  });
}

/**
 * This function fetches recent obituaries
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function fetchAds(cancelToken: any): Promise<AxiosResponse<any, any>> {
  return apiClient.get(ApiConfig.GENERAL.ADS, {
    cancelToken: cancelToken,
  });
}
