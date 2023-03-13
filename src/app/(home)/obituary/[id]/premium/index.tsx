/**
 *Project:damirifa
 *File:premium
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import AudioPlayer from "@components/audio-player";
import ThankYou from "@components/cards/obituary-page-cards/premium/thank-you";
import { ObituaryPremium, Slider } from "@components/carousel";
import { BiGong } from "@components/icons";
import { Button, Link, LoadingDots } from "@common-ui/index";
import { useModalContext } from "@contexts/ModalContext";
import { HighlightPhotos } from "@features/premium-obituary";
import { FeaturesAvailable, FormPreviewPlaceholder } from "@lib/Constants";
import { MetaTags, uuid } from "@lib/Utils";
import cn from "classnames";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsPause } from "react-icons/bs";

import s from "./index.module.css";

const LiveStream = dynamic(
  () => import("@components/cards/obituary-page-cards/premium/live-stream"),
  {
    suspense: true,
  }
);
const Feature = dynamic(
  () => import("@components/cards/obituary-page-cards/premium/features"),
  {
    suspense: true,
    // loading: () => <LoadingDots />,
  }
);
const Appreciations = dynamic(
  () => import("@features/premium-obituary/appreciations"),
  {
    suspense: true,
  }
);
const Condolences = dynamic(
  () => import("@features/premium-obituary/condolences"),
  {
    suspense: true,
  }
);
const Poster = dynamic(
  () => import("@features/premium-obituary/tribute-poster"),
  {
    loading: () => <LoadingDots />,
  }
);
const Tributes = dynamic(() => import("@features/premium-obituary/tributes"), {
  loading: () => <LoadingDots />,
});

const Premium = ({ id, data }: any) => {
  const modal = useModalContext();
  const condolencesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleCondolencesButtonClick = () => {
    console.log(condolencesRef);
    if (condolencesRef.current !== null) {
      condolencesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="overflow-hidden">
      <MetaTags title={"Jerry John Rawlings-Obituary"} />
      <ObituaryPremium
        onCondolencesClick={handleCondolencesButtonClick}
        data={data.deceased_information}
      />
      <section
        className={cn(
          "flex py-1 bg-black flex-row items-center justify-center",
          s.root
        )}
      >
        <Link variant="primary" className={cn("text-base", s.link)} href="/">
          home &nbsp; /&nbsp; obituary &nbsp;/&nbsp;{" "}
          {data?.deceased_information?.first_name
            ? data?.deceased_information?.first_name
            : FormPreviewPlaceholder.firstName}
        </Link>
      </section>
      <section className={cn("w-full", s.greyBackground)}>
        <HighlightPhotos
          galleryImages={
            data?.media?.album_images
              ? data?.media?.album_images
              : Array(5).fill(FormPreviewPlaceholder.image)
          }
        />
      </section>
      <section className={cn("py-12 ", s.tributeBackground)}>
        <div className={cn("flex flex-col container lg:px-1 xl:px-4")}>
          <div
            className={cn("flex flex-row mt-2 mb-2 justify-center lg:w-4/5")}
          >
            <AudioPlayer
              src={data?.media?.audio_announcement}
              renderPlayer={({ isPlaying, play, pause }) => (
                <Button
                  pill
                  size="lg"
                  className={cn("text-xl mx-auto lg:mx-0", s.button)}
                  data-active={`${isPlaying}`}
                  onClick={() => {
                    isPlaying && data?.media?.audio_announcement
                      ? pause()
                      : play();
                  }}
                >
                  {isPlaying ? (
                    <BsPause className={"text-3xl"} />
                  ) : (
                    <BiGong className={"text-base"} />
                  )}
                  {data?.media?.audio_announcement ? (
                    <span>Audio Announcement</span>
                  ) : (
                    <span>{FormPreviewPlaceholder.audioAnnouncement}</span>
                  )}
                </Button>
              )}
            />
          </div>
          <div
            className={cn("grid grid-cols-5 mt-12 gap-20 lg:gap-3 xl:gap-8")}
          >
            <div className="xl:col-span-4 col-span-5">
              <Poster
                family={data?.family}
                deceasedInformation={data?.deceased_information}
                titleAndBiography={data?.titleAndBiography}
                events={data?.events}
              />
            </div>
            <div className="xl:col-span-1 col-span-5 gap-10 grid grid-cols-2">
              <LiveStream
                className={"col-span-2 sm:col-span-1 xl:col-span-2"}
              />
              {FeaturesAvailable.map((item: any, index: number) => (
                <Feature
                  key={uuid()}
                  backgroundImageSrc={item.backgroundImageSrc}
                  svgOverlaySrc={item.svgOverlaySrc}
                  label={item.label}
                  className={"col-span-2 sm:col-span-1 xl:col-span-2"}
                  onClick={() => {
                    const Component = item.feature;
                    modal.openModal(<Component />, "", false);
                  }}
                />
              ))}
              <div className="flex flex-col justify-between col-span-2 sm:col-span-1 xl:col-span-2 h-fit">
                <Link href="/src/app/(home)/obituary/donation/1">
                  <Feature
                    key={uuid()}
                    label="funeral donation"
                    backgroundImageSrc="/assets/img/donation.jpg"
                    svgOverlaySrc="/svgs/donation.svg"
                  />
                </Link>
                <div
                  className={cn(
                    "bg-black flex py-4 mt-5  flex-col justify-center ",
                    s.rounded
                  )}
                >
                  <h3
                    className={"text-xl font-semibold text-center text-white"}
                  >
                    Thank You For <br /> Your Donation
                  </h3>
                  <Slider
                    custom={true}
                    options={{
                      pagination: true,
                      arrows: true,
                      breakpoint: {
                        1024: {
                          fixedWidth: 300,
                        },
                      },
                    }}
                  >
                    <ThankYou />
                    <ThankYou />
                    <ThankYou />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className={"pt-10"}>
            <Tributes />
          </div>
          <div ref={condolencesRef} className={"pt-10"}>
            <Condolences />
          </div>
          <div className="pt-10">
            <Appreciations />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;
// export async function getServerSideProps() {
//   return {
//     props: {},
//     // revalidate: 120, // In seconds
//   };
// }
