import OneWeekAdvert from "@components/cards/advertistment-card/one-week-advert";
import DeathNoticeCard from "@components/cards/death-notice-page-cards/recent-death-notice-card";
import { Slider } from "@components/carousel";
import DeathNoticeBanner from "@components/carousel/slides/death-notice";
import InspirationalLives from "@features/landing-page/inspirational-lives";
import { MetaTags } from "@lib/Utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import s from "./index.module.css";
// import styled from 'styled-components'

// import Head from 'next/head'
import cn from "classnames";
import { uuid } from "@lib/Utils";
import { useDeathNotices } from "@services/hooks/innerPages";
import { useAds } from "../../../utils/services/hooks/innerPages";
import moment from "moment";
export type DeathNoticeLandingPageProps = {};

export default function DeathNotice({}: DeathNoticeLandingPageProps) {
  const { data, isError, isLoading } = useDeathNotices();
  const { data: adsData } = useAds();
  console.log("data", data, adsData);

  return (
    <>
      <MetaTags title={"Death Notice"} />
      <div className="bg-[#303035]">
        {" "}
        {/*Banner*/}
        <section className={cn("", s.slider)}>
          <Splide
            options={{
              arrows: false,
              type: "loop",
              gap: "5rem",
              focus: "center",
              // width: "885px",
              // fixedWidth: 985,
              autoWidth: true,
              classes: {
                pagination: cn("flex flex-row justify-center", s.pagination),
              },
            }}
          >
            {Array(10)
              .fill({})
              .map((category: any, i: number) => (
                <SplideSlide key={i + "_slider_main_"}>
                  <DeathNoticeBanner src={""} />
                </SplideSlide>
              ))}
          </Splide>
        </section>
        {/*Search Bar*/}
        {/* <section> */}
        {/* <SiteSearchBar /> */}
        {/* </section> */}
        {/*Carousels*/}
        <section className={cn("container", s.cardsGrid)}>
          {data && data?.data && data?.data?.map ? (
            <div className={s.itemCards}>
              {data.data.map((r: any, id: number) => (
                <DeathNoticeCard
                  id={id}
                  details={{
                    deceased_name: r.deceased_name,
                    deceased_image: r.deceased_image[0].path,
                    date_of_birth: moment(r.date_of_birth, "YYYY-MM-DD"),
                    date_of_death: moment(r.date_of_death, "YYYY-MM-DD"),
                    // prefix: r.prefix,
                    // suffix: r.suffix,
                  }}
                  payload={r}
                  key={uuid()}
                />
              ))}
            </div>
          ) : (
            <p className="text-4xl text-center text-white">No Death Notices</p>
          )}
          {adsData && adsData?.length == 0 ? (
            <p className="text-4xl text-center text-white">No Ads to display</p>
          ) : (
            <div className={s.advertCards}>
              <OneWeekAdvert className={""} />
              <OneWeekAdvert className={""} />
            </div>
          )}
        </section>
        <section className={"inspirational-lives-section"}>
          <InspirationalLives src={"/#"} />
        </section>
      </div>
    </>
  );
}
