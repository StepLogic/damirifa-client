import {
  CardInsigniaLargeOne,
  CardInsigniaSmallTwo,
  CardInsigniaFour,
  CardRose,
} from "@components/icons/Illustrations";
import { Image } from "@components/ui/common";
import cn from "classnames";
import React from "react";

import s from "./index.module.css";

export type OneWeekBannerProps = {
  src: string;
  className?: string;
};

export default function OneWeekBanner({
  src = "/constants/morning.png",
  className,
}: OneWeekBannerProps) {
  return (
    <>
      <section className={cn(className, s.root)}>
        <div className="flex flex-row items-center gap-[10%] justify-center">
          <div className="flex  flex-col items-center justify-center gap-4">
            <div className={cn(s.imageWrapper, "")}>
              <Image
                loading="lazy"
                src={"/constants/obituary-image-2.jpeg"}
                objectFit="cover"
                objectPosition={"center"}
                quality={60}
                alt="dummy image"
                className={s.image}
              />
            </div>
            <CardInsigniaLargeOne className={s.flower} />
          </div>
          <div className="flex flex-col max-w-[412px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <CardInsigniaSmallTwo width={67.32} height={23.26} />
              <p className={s.pHeading}>ONE WEEK OBSERVATION</p>
              <CardInsigniaLargeOne width={47.05} height={6.34} />
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className={s.name}>Miss Mariam Makiba</p>
              <p className={s.doBToDod}>{`[1952 - 2022]`}</p>
              <CardInsigniaFour />
              <p
                className={s.comment}
              >{`“Don’t let the evil in the world kill the love in your heart. Continue tu love another!”`}</p>
            </div>
            <CardRose className={"w-[40px] mx-auto my-2"} />
          </div>
        </div>
      </section>
    </>
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
