import React from "react";
import { Button, Image } from "@components/ui/common";
import s from "./index.module.css";
import cn from "classnames";

export type ObituaryBannerProps = {
  src: string;
};

export default function ObituaryBanner({
  src = "/constants/morning.png",
}: ObituaryBannerProps) {
  return (
    <>
      <div className={cn(s.root, "flex flex-col-reverse lg:flex-row w-full")}>
        <div
          className={cn(
            s.textColumn,
            "items-center xl:items-left md:pl-0 pl-0"
          )}
        >
          <h2 className="hero-heading text-white">Ataa Adjoa</h2>
          <h3
            className={"text-white  lg:text-2xl text-xl mt-2 lg:mb-5 mb-2"}
          >{`Age:  ${25} years(${1985}-${2021})`}</h3>
          <p
            className={
              "mt-3 text-grey-white hero-paragraph  leading-5 lg:w-9/10 mb-4"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem est
            aliquet aliquet vel nisi nullam. Commodo nisi, erat tristique
            rutrum. Vitae, risus leo purus quis semper nulla at eget. Lorem
            tempor non lorem porttitor pellentesque.
          </p>
          <div
            className={
              "flex flex-row items-center lg:mt-5 mt-2 mb-3 lg:mb-0 w-full lg:w-auto"
            }
          >
            <Button
              variant="primary"
              size="sm"
              outline
              label={"View obituary"}
              className={cn(s.button, "lg:mr-3 mr-2 flex-1 lg:flex-none")}
            />
            <Button
              variant="primary"
              size="sm"
              className={cn(s.button, "flex-auto lg:flex-none")}
              label={"Share"}
            />
          </div>
        </div>
        <div className={s.imageColumn}>
          <Image
            src={src}
            className={s.imageWrapper}
            priority
            objectFit="cover"
            objectPosition="center"
            alt="Obituary Poster"
          />
        </div>
      </div>
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
