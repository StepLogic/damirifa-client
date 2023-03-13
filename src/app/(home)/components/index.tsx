"use client"
import Navbar from "./common/navbar";

import {
  seoAdminTwitterHandle,
  seoLocale,
  seoSiteName,
  seoSiteUrl,
  seoTwitterHandle,
} from "@lib/DefaultValues";

import cn from "classnames";
import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";
import s from "./index.module.css";

// import Navbar from '@features/common/navbar'
// import Footer from '@features/common/footer'

type MainLayoutProps = {
  children?: React.ReactNode;
  transparentNavbar?: boolean;
  noPadAppContainer?: boolean;
};


export default function MainLayout({
  children,
  transparentNavbar = false,
  noPadAppContainer = false,
}: MainLayoutProps) {
  // useEffect(() => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   window.addEventListener("resize", () => {
  //     // We execute the same script as before
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   });
  // }, []);
  return (

    <div data-theme={"app"}>

      <Navbar backgroundTransparent={transparentNavbar} />
      <main
        id="AppLayout"
        className={cn(s.appContainer, {
          [s.noPadding]: noPadAppContainer,
        })}
      >
        {/*<ScrollUpButton className={s.floatingButton} />*/}
        {children}
      </main>
      {/*<Footer />*/}
    </div>
    // </SWRConfig>
  );
}
