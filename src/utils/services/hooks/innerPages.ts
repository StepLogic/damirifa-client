/**
 * Project: damirifa
 * File: homepage.ts
 * Created by Pennycodes on 9/1/2022.
 * Copyright damirifa
 */
import axios from "axios";
import { useEffect, useState } from "react";

import { fetchAds, fetchDeathNotices, fetchOneWeek } from "../innerPages";

export const useDeathNotices = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchDeathNotices(cancelToken.token)
      .then((res) => {
        // console.table(res.data);
        setData(res.data["death-notice"]);
      })
      .catch((err) => {
        setError(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useOneWeek = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchOneWeek(cancelToken.token)
      .then((res) => {
        setData(res.data["one-week"]);
      })
      .catch((err) => {
        setError(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);
  // const {data, error} = useSWR("banners", fetchBanners);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};
export const useAds = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchAds(cancelToken.token)
      .then((res) => {
        console.table(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);
  // const {data, error} = useSWR("banners", fetchBanners);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};
