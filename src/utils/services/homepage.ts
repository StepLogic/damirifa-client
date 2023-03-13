/**
 * Project: damirifa
 * File: homepage
 * Created by Pennycodes on 8/25/2022.
 * Copyright damirifa
 */
import ApiConfig from "./config";
import apiClient from "./requests";
import { AxiosResponse } from "axios";

/**
 * This function fetches user and admin banners
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export async function fetchBanners(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  return await apiClient.get(ApiConfig.GENERAL.HOMEPAGE.BANNERS, {
    cancelToken,
  });
}

/**
 * This function fetches special announcement
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export async function fetchSpecialAnnouncement(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  return await apiClient.get(ApiConfig.GENERAL.HOMEPAGE.SPECIAL);
}

/**
 * This function fetches featured announcement
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export async function fetchFeaturedAnnouncement(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  return await apiClient.get(ApiConfig.GENERAL.HOMEPAGE.FEATURED);
}

/**
 * This function fetches living waters video
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export async function fetchLivingWaters(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  return await apiClient.get(ApiConfig.GENERAL.HOMEPAGE.LIVING);
}

/**
 * This function fetches notices
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export function fetchNotices(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  const config = {
    products: [
      {
        id: "one-week",
        features: false,
        limit: 10,
        fields: true,
      },
      {
        id: "death-notice",
        features: false,
        limit: 10,
        fields: true,
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
export function fetchRecentObituaries(
  cancelToken: any
): Promise<AxiosResponse<any, any>> {
  const config = {
    packages: [
      {
        id: "obituary",
        features: false,
        products: [
          {
            id: "standard",
            features: false,
            limit: 10,
            fields: true,
          },
          {
            id: "premium",
            features: false,
            limit: 10,
            fields: true,
          },
          {
            id: "royal",
            features: false,
            limit: 10,
            fields: true,
          },
        ],
      },
    ],
  };

  return apiClient.post(ApiConfig.GENERAL.HOMEPAGE.PACKAGES, config);
}
