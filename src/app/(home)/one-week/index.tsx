import OneWeekAdvert from "@components/cards/advertistment-card/one-week-advert";
import { OneWeekCard } from "@components/cards/one-week-page-cards/recent-one-week-card";
import OneWeekBanner from "@components/carousel/slides/one-week";
import InspirationalLives from "@features/landing-page/inspirational-lives";
import { MetaTags } from "@lib/Utils";
import { useAds, useOneWeek } from "@services/hooks/innerPages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import cn from "classnames";
import moment from "moment";
import React, { useEffect, useState } from "react";

import { uuid } from "@lib/Utils";
import s from "./index.module.css";

// import styled from 'styled-components'

// import Head from 'next/head'
export type OneWeekLandingPageProps = {};

export default function OneWeek({}: OneWeekLandingPageProps) {
  //   const { query } = useRouter();
  //   const { notices } = useAppSelector((state) => state.homepage);
  //   const [notice, setNotice] = useState<Notices>();
  //   const [noticeError, setNoticeError] = useState<string>();
  //   const { slug } = query;

  //   useEffect(() => {
  //     if (slug) {
  //       const notice = notices.find((notice: Notices) => notice.slug === slug);
  //       setNotice(notice);
  //     } else {
  //       setNoticeError("No notice found");
  //     }
  //   }, [id]);
  const { data, isError, isLoading } = useOneWeek();
  const { data: adsData } = useAds();

  return (
    <>
      <MetaTags title={"One Week"} />
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
                  <OneWeekBanner src={""} />
                </SplideSlide>
              ))}
          </Splide>
        </section>
        <section className={cn("container", s.cardsGrid)}>
          {data && data?.data && data?.data?.map ? (
            <div className={s.itemCards}>
              {data.data.map((r: any, id: number) => (
                <OneWeekCard
                  id={id}
                  details={{
                    deceased_name: r.first_name + " " + r.last_name,
                    deceased_image: r.image[0].path,
                    date_of_birth: moment(r.date_of_birth, "YYYY-MM-DD"),
                    date_of_death: moment(r.date_of_death, "YYYY-MM-DD"),
                    prefix: r.prefix,
                    suffix: r.suffix,
                  }}
                  key={uuid()}
                  payload={r}
                />
              ))}
            </div>
          ) : (
            <p className="text-4xl text-center text-white">
              No One Week Available
            </p>
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
