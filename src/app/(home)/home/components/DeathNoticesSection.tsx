import React, { useEffect, useState } from "react";
import FreeAnnouncementCard from "@components/cards/free-announcement-card";
import { Slider } from "@components/carousel";
import { Divider } from "@components/ui/common";
import { Notices } from "@lib/interface/homepage/notices";
import { SplideSlide } from "@splidejs/react-splide";
import { v4 as uuidv4 } from "uuid";
import { useNotices } from "@root/src/utils/services/hooks/homepage";
import { getDeathNotice } from "../apiClient";

interface Props {}

const DeathNotices: React.FC<Props> = (props) => {
  const [state, setState] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDeathNotice()
      .then((r) => {
        console.log("erro", r);

        setState(r);
        setIsLoading(false);
      })
      .catch((e) => setIsError(true));
  }, []);

  return (
    <section className={" featured-announcement-section"}>
      <h2
        className={
          "text-white text-center pt-10 section-heading  mb-4 2xl:mb-4"
        }
      >
        Notices
      </h2>
      <Divider
        variant="primary"
        height="thick"
        className={"divider mx-auto mb-16"}
      />
      <div className={"pt-5  w-full lg:pr-0 xl:mx-auto pb-20"}>
        <Slider multi pauseOnDesktop>
          {isLoading || isError ? (
            <>
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard isPlaceholder />
              </SplideSlide>
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard isPlaceholder />
              </SplideSlide>{" "}
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard isPlaceholder />
              </SplideSlide>{" "}
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard isPlaceholder />
              </SplideSlide>
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard isPlaceholder />
              </SplideSlide>
            </>
          ) : (
            state.length &&
            state.map((notice: Notices) => (
              <SplideSlide key={uuidv4()}>
                <FreeAnnouncementCard data={notice} />
              </SplideSlide>
            ))
          )}
        </Slider>
      </div>
    </section>
  );
};

export default DeathNotices;
