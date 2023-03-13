/**
 * Project: damirifa
 * File: environment.d
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST_API: "http://damirifa.eu-west-2.elasticbeanstalk.com/api/v1";
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;

      GOOGLE_CLIENT_ID: "912115090971-rio9qnkgdeekmgmg36j96774085r7imj.apps.googleusercontent.com";
      GOOGLE_CLIENT_SECRET: "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";
      FACEBOOK_CLIENT_ID: "374851051283033";
      FACEBOOK_CLIENT_SECRET: "97cf55a247701d4e2f3242288a20f4e0";
      TWITTER_CLIENT_ID: "WGFyLS1ZemU5a1U5OTB2d1ZpRkg6MTpjaQ";
      TWITTER_CLIENT_SECRET: "c9OLVnem078zCzh-5VqxM-9IcB7SopqS2NJRm86lInnPaq8yxz";
      NEXTAUTH_URL: "https://damirifa-frontend.herokuapp.com";
      NEXTAUTH_SECRET: "";
    }
  }
}

export {};
