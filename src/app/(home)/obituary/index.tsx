import React from "react";
// import styled from 'styled-components'
// import ObituaryBanner from '@components/carousel/slides/obituary'
// import Carousel from '../../src/components/carousel'
import { Announcement } from "@lib/FeaturedAnnouncment";
import { SplideSlide } from "@splidejs/react-splide";
import FreeAnnouncementCard from "@components/cards/free-announcement-card";
import { Divider, LoadingDots } from "@common-ui/index";
import FreeRecentObituaryCard from "@components/cards/obituary-page-cards/free-recent-obituary-card";
import RecentObituaryCard from "@components/cards/obituary-page-cards/recent-obituary-card";
import Head from "next/head";
import { MetaTags } from "@lib/Utils";

import dynamic from "next/dynamic";
// export type ObituaryLandingPageProps = {}
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   & .slider-section {
//     @media only screen and (max-width: 400px) {
//       padding-left: 39px !important;
//       padding-right: 15px;
//     }
//   }
// `
export default function ObituaryLandingPage({}: ObituaryLandingPageProps) {
  return (
    <>
      <Head>
        <title>Obituary&nbsp;|&nbsp;Damirifa.com</title>
      </Head>
      <MetaTags title={"Obituary"} />
      <div className="flex flex-col">
        {/*Banner*/}
        <section>
          <ObituaryBanner />
        </section>
        {/*Search Bar*/}
        <section className="bg-[var(--damirifa-red)] w-full h-6"></section>
        {/*Carousels*/}
        <section className={"featured-announcement-section pb-10 "}>
          <div className={"slider-section w-full mt-5 pb-1 pl-5 lg:pr-0"}>
            {/*Obituary Slider One*/}
            <Slider multi>
              {Announcement.map((announcement: any, i: number) => (
                <SplideSlide key={i + "_slider_bucket_free"}>
                  <RecentObituaryCard />
                </SplideSlide>
              ))}
            </Slider>
            {/*Obituary Slider Two*/}
            <Divider
              className={"divider-white-thin !w-[90%] mx-auto mt-5 mb-5"}
            />
            <Slider multi>
              {Announcement.map((announcement: any, i: number) => (
                <SplideSlide key={i + "_slider_bucket_free"}>
                  <RecentObituaryCard />
                </SplideSlide>
              ))}
            </Slider>
            {/*Free Obituary Slider*/}
            <Divider
              className={"divider-white-thin !w-[90%] mx-auto mt-5 mb-5"}
            />
            <Slider multi>
              {Announcement.map((announcement: any, i: number) => (
                <SplideSlide key={i + "_slider_bucket_free"}>
                  <FreeRecentObituaryCard />
                </SplideSlide>
              ))}
            </Slider>
            {/*Free Index Slider*/}
            <Divider
              className={"divider-white-thin !w-[90%] mx-auto mt-5 mb-5"}
            />
            <Slider multi>
              {Announcement.map((announcement: any, i: number) => (
                <SplideSlide key={i + "_slider_bucket_free"}>
                  <FreeAnnouncementCard />
                </SplideSlide>
              ))}
            </Slider>
            {/*Recent Obituary Slider*/}
          </div>
        </section>
        <section className={"inspirational-lives-section"}>
          <InspirationalLives src={"/#"} />
        </section>
      </div>
    </>
  );
}
const InspirationalLives = dynamic(
  () => import("@features/landing-page/inspirational-lives"),
  {
    ssr: true,
    loading: () => <LoadingDots />,
  }
);
const ObituaryBanner = dynamic(
  () => import("@components/carousel").then((r) => r.Obituary),
  {
    ssr: true,
    loading: () => <LoadingDots />,
  }
);
const Slider = dynamic(
  () => import("@components/carousel").then((r) => r.Slider),
  {
    ssr: true,
    loading: () => <LoadingDots />,
  }
);
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 120, // In seconds
  };
}
