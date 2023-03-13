import {
  CardInsigniaLargeOne,
  CardInsigniaSmallTwo,
  CardInsigniaFour,
  CardRose,
  CardFlowers,
  CardInsigniaThree,
  CardInsigniaTwo,
} from "@components/icons/Illustrations";
import { Image } from "@common-ui/index";
import cn from "classnames";
import React, { useEffect } from "react";

import s from "./index.module.css";
import { GaBack, GaSpeak } from "@components/icons";
import AudioPlayer from "@components/audio-player";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import moment from "moment";
import { MetaTags } from "@lib/Utils";

export type DeathNoticeDetailPage = {
  src: string;
  className?: string;
};

export default function DeathNoticeDetailPage({
  src = "/constants/morning.png",
  className,
}: DeathNoticeDetailPage) {
  const { query } = useRouter();
  const [load, setLoad] = useState<any>(null);
  useEffect(() => {
    if (query) {
      axios.post("/api/deathNoticeApi", { id: query.id }).then((r) => {
        console.log("id", r);
        setLoad(r.data.body);
      });
    }
  }, [query]);
  useEffect(() => {
    console.log("load", load);
  }, [load]);
  // console.log("query", query);
  return (
    <div className={cn("w-full", s.root)}>
      <MetaTags title={load !== null && load.deceased_name} />
      <div className="container grid grid-cols-1">
        <div className="flex flex-row justify-end items-center gap-2 border-[#19191F4C] border-solid border-b-[2px] border-t-0 border-r-0 border-l-0 pb-[min(20px,2vh)] pt-[min(21px,2vh)]">
          <AudioPlayer
            renderPlayer={(props) => (
              <button
                onClick={() => {
                  props.isPlaying ? props.pause() : props.play();
                }}
                className={s.button}
              >
                <GaSpeak />
              </button>
            )}
            src={"/audio/amazing-grace.mp3"}
          />
          <button className={s.button}>
            <GaBack />
          </button>
        </div>
        <section className={cn(s.headerSection)}>
          <div className="flex flex-row items-center gap-[10%] justify-center">
            <div className={cn(s.imageWrapper, "")}>
              <Image
                loading="lazy"
                src={
                  load !== null &&
                  load?.deceased_image &&
                  load?.deceased_image[0]?.path
                }
                objectFit="cover"
                objectPosition={"center"}
                quality={60}
                alt="dummy image"
                className={s.image}
              />
              <CardFlowers className={s.flower} />
            </div>
            <div className="flex flex-col max-w-[412px]">
              <div className="flex flex-col items-center justify-center gap-2">
                <CardInsigniaThree />
                <p className={s.pHeading}>
                  {load !== null &&
                  load.announcement_title &&
                  load.announcement_title !== ""
                    ? load.announcement_title
                    : "in loving memory"}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className={s.name}>{load !== null && load.deceased_name}</p>
                <p className={s.doBToDod}>{`[${
                  load !== null &&
                  load.date_of_birth &&
                  moment(load.date_of_birth, "YYYY-MM-DD").format("YYYY")
                } - ${
                  load !== null &&
                  load.date_of_death &&
                  moment(load.date_of_death, "YYYY-MM-DD").format("YYYY")
                }]`}</p>
                <CardInsigniaTwo />
                <p className={s.comment}>
                  {load !== null && load.deceased_quote}
                </p>
              </div>
              <CardRose className={"w-[40px] mx-auto my-2"} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
// <>
// <div className="d-lg-block d-none">
// <div>
//   <div
//     lg={6}
//     md={6}
//     className={
//       'justify-content-center align-items-start d-flex flex-column border-line text-column'
//     }
//   >
// <H2 className={'text-white'}>Ataa Adjoa</H2>
// <H3
//   className={'text-white  mt-2 mb-5'}
// >{`Age:  ${25} years(${1985}-${2021})`}</H3>
// <p className={'mt-3 text-grey-white text-size-md  fs-5'}>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem est
//   aliquet aliquet vel nisi nullam. Commodo nisi, erat tristique
//   rutrum. Vitae, risus leo purus quis semper nulla at eget. Lorem
//   tempor non lorem porttitor pellentesque.
// </p>
// <div className={'d-flex flex-row align-items-center mt-5 '}>
//   <OutlineButton
//     width={170}
//     height={45}
//     color={'var(--damirifa-red-2)'}
//     radius={20}
//     className={'me-3'}
//   >
//     <span className={'text-damirifa-red tbutton-text text-size-md'}>
//       View obituary
//     </span>
//   </OutlineButton>
//   <Button
//     width={170}
//     height={45}
//     color={'var(--damirifa-red-2)'}
//     radius={20}
//   >
//     <span className={'text-white tbutton-text text-size-md'}>
//       Share
//     </span>
//   </Button>
// </div>
//   </div>
//   <Col lg={6} md={6} className={'px-0'}>
//     <ResponsiveImage
//       src={'/constants/special-announcement.png'}
//       className={'me-2'}
//       loading="lazy"
//       objectFit="cover"
//     />
//   </Col>
// </div>
// </div>

// <div className="d-flex d-lg-none">
// <div className={'d-flex flex-column pb-3'}>
//   <div className={'px-0 mb-2 mt-2'}>
//     <ResponsiveImage
//       src={'/constants/special-announcement.png'}
//       loading="lazy"
//       objectFit="cover"
//       className={'mx-auto'}
//     />
//   </div>
//   <div
//     className={
//       'justify-content-center align-items-start d-flex flex-column border-line text-column'
//     }
//   >
//     <H2 className={'text-white mx-auto '}>Ataa Adjoa</H2>
//     <H3
//       className={'text-white mx-auto mt-2 mb-2'}
//     >{`Age:  ${25} years(${1985}-${2021})`}</H3>
//     <p className={'mt-1 mx-auto text-grey-white text-size-md px-3'}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem est
//       aliquet aliquet vel nisi nullam. Commodo nisi, erat tristique
//       rutrum. Vitae, risus leo purus quis semper nulla at eget. Lorem
//       tempor non lorem porttitor pellentesque.
//     </p>
//     <div className={'d-flex flex-row align-items-center mt-5 mx-auto'}>
//       <OutlineButton
//         width={170}
//         height={45}
//         color={'var(--damirifa-red)'}
//         radius={20}
//         className={'me-3'}
//       >
//         <span className={'text-damirifa-red tbutton-text text-size-md'}>
//           View obituary
//         </span>
//       </OutlineButton>
//       <Button
//         width={170}
//         height={45}
//         color={'var(--damirifa-red)'}
//         radius={20}
//       >
//         <span className={'text-white tbutton-text text-size-md'}>
//           Share
//         </span>
//       </Button>
//     </div>
//   </div>
// </div>
// </div>
// </>
