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
