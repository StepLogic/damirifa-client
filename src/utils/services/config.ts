/**
 * Project: damirifa
 * File: endpoints
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */

// import axios from "axios";

// const instance = axios.create({
//   baseURL:
//     process.env.HOST_API ||
//     "http://damirifa.eu-west-2.elasticbeanstalk.com/api/v1",
//   //   headers: { "Access-Control-Allow-Origin": "*" },
// });
// export const queryString = (value: any) => {
//   var str = [];
//   for (var p in value)
//     if (value.hasOwnProperty(p)) {
//       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(value[p]));
//     }
//   return str.join("&");
// };
// export const fetcher = (url: string) =>
//   instance.get(url).then((res) => res.data);

// export const localStorageProvider = () => {
//   const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));
//   window.addEventListener("beforeunload", () => {
//     const appCache = JSON.stringify(Array.from(map.entries()));
//     localStorage.setItem("app-cache", appCache);
//   });
//   return map;
// };

const ApiConfig = {
  USER: {
    REGISTER: "user/signup?namespace=register",
    LOGIN: "user/login?namespace=login",
    SOCIAL_LOGIN: "user/social-login",
    VERIFY_OTP: "user/verify-otp",
    SEND_OTP: "user/send-otp",
    CAPTCHA: "user/captcha",
  },
  GENERAL: {
    HOMEPAGE: {
      BANNERS: "general/banners",
      SPECIAL: "general/special-announcement",
      FEATURED: "general/featured-announcements",
      LIVING: "general/living-waters",
      PRODUCTS: "general/products",
      PACKAGES: "general/packages",
    },
    ADS: "/general/ads",
    SUPPORT: "/general/support",
    SETTINGS: {},
    UTILS: {
      COUNTRIES: "general/countries",
    },
  },
};

export default ApiConfig;
