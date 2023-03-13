/**
 * Project: damirifa
 * File: homepage.ts
 * Created by Pennycodes on 9/1/2022.
 * Copyright damirifa
 */
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import {
  fetchBanners,
  fetchFeaturedAnnouncement,
  fetchLivingWaters,
  fetchNotices,
  fetchRecentObituaries,
  fetchSpecialAnnouncement,
} from "../homepage";

export const useBanner = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchBanners(cancelToken.token)
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
    banners: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useSpecialAnnouncement = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchSpecialAnnouncement(cancelToken.token)
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
    banners: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useFeaturedAnnouncement = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchFeaturedAnnouncement(cancelToken.token)
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
    banners: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useNotices = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchNotices(cancelToken.token)
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
    banners: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRecentObituaries = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchRecentObituaries(cancelToken.token)
      .then((res) => {
        // console.log(res.data);
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
    banners: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useLivingWaters = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchLivingWaters(cancelToken.token)
      .then((res) => {
        // console.table(res);
        setData(res.data);
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
