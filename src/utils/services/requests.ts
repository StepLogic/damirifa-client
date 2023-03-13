/**
 * Project: damirifa
 * File: requests
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */

import axios from "axios";

const axiosInstance = axios.create({baseURL: process.env.HOST_API || ""});
// const axiosInstance = axios.create({
//   baseURL: "https://test.damirifa.com/api/announcement",
// });
axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => error.response || "Something went wrong"
);

export default axiosInstance;
