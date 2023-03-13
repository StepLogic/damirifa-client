import React, { useState } from "react";
// import styled from 'styled-components'
// import { MetaTags } from '@lib/Utils'
// import dynamic from 'next/dynamic'
// import Poster from '@components/poster'
// import Divider from '@components/ui/divider/divider'
// import {
//   Container as RootContainer,
//   Collapse,
//   Dropdown,
//   Accordion,
// } from 'react-bootstrap'
import { Button, Image, Link } from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import { StepperProps } from "@common-ui//step-wizard";
// import PackageCard from '@components/cards/pricing-page-cards/package-card'
// import {
//   AiOutlineCheck,
//   AiFillCaretDown,
//   AiOutlineArrowLeft,
//   AiOutlineArrowRight,
//   AiOutlinePlus,
//   AiOutlineMinus,
// } from 'react-icons/ai'
// import SinglePageCarousel from '../../components/carousel/single-page-carousel'
// import PricingPageDisplayBanner from '@components/carousel/slides/pricing'
// import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
// import TestimonialCards from '@components/cards/pricing-page-cards/testimonial-card'
// import ResponsiveImage from '@components/ui/image'
// // import { useMediaQuery } from 'react-responsive'
// // import InputSearchDropdown from '@components/ui/input-search-dropdown'
// import Link from 'next/link'
interface PaymentMethodProps extends StepperProps {
  hasQrCode?: boolean;
  foreign?: boolean;
}

const SelectPaymentMethod: React.FC<PaymentMethodProps> = ({
  hasQrCode,
  foreign,
  ...stepper
}) => {
  const option = [
    "Jane Doe (Widower)",
    "Angel Mensah (Child)",
    "Martin Anson (Parent)",
  ];
  const [expand, setExpand] = useState(true);
  return (
    <section className={cn(s.root, "md:px-10")}>
      <p className={cn("mt-4 mb-9", s.p)}>
        Select Standard Method or Scan QR Code to Send Donation to &nbsp;
        <span className="text-damirifa-red-2">Jane Doe</span>
      </p>

      <div className="flex flex-col justify-between items-center">
        {foreign ? (
          <div className="my-3" onClick={() => stepper.nextStep()}>
            <div className={s.card}>
              {/* <div className={s.badge}>Recommended</div> */}
              <Image
                className={cn(s.svg, "")}
                src={"/assets/logo/venmo.png"}
                objectFit="contain"
                alt={"SVG QR code"}
              />
              <span
                className={cn(
                  "text-center capitalize mt-auto mb-2",
                  s.cardTextMuted
                )}
              >
                processed by Venmo
              </span>
            </div>
          </div>
        ) : (
          <div
            className="my-3 hover:cursor-pointer"
            onClick={() => stepper.nextStep()}
          >
            <div className={cn(s.card, s.hover)}>
              {/* <div className={s.badge}>Recommended</div> */}
              <svg
                width="115"
                height="115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-auto"
              >
                <image
                  width="114"
                  height="114"
                  xlinkHref={"/svgs/mobile.svg"}
                />
              </svg>
              <span
                className={cn("text-center font-bold  mb-3 mt-3", s.textBlack)}
              >
                Standard Method <br />
              </span>
              <span
                className="capitalize mt-1 text-center mb-4"
                style={{ fontSize: "0.8rem" }}
              >
                ( Donate using Mobile Money, Visa/Mastercard )
              </span>
              <span className="text-damirifa-red underline not-italic">
                Click Here
              </span>
              <span
                className={cn(
                  "text-center capitalize mt-auto mb-2",
                  s.cardTextMuted
                )}
              >
                processed by damirifa
              </span>
            </div>
          </div>
        )}
        {hasQrCode ? (
          <>
            <a
              className="mt-4  mb-1 lg:mx-4 cursor-pointer underline capitalize"
              onClick={() => {
                // setExpand(!expand);
              }}
            >
              desktop users :&nbsp;
              <i className="not-italic">QR code option available</i>
            </a>
            {/* <Collapse isOpen={true}> */}
            <div
              className="mt-1 mb-3 mx-auto flex flex-col"
              // onClick={() => stepper.nextStep()}
            >
              <div className={cn(s.card, "mx-auto")}>
                <Image
                  className={cn(s.svg, "")}
                  src={"/svgs/qr.svg"}
                  objectFit="cover"
                  alt={"SVG QR code"}
                />
                {/* <span className={cn("text-center mb-3 mt-3", s.textBlack)}>
                  QR Code Method (Donate using third party platform)
                </span> */}
                <span
                  className={cn(
                    "capitalize mt-4 font-bold text-center mb-4",
                    s.textBlack
                  )}
                >
                  (&nbsp;scan&nbsp;)
                </span>
                <span
                  className={cn(
                    "text-center mb-2  capitalize",
                    s.cardTextMuted
                  )}
                >
                  Processed by&nbsp;
                  <i className="text-damirifa-red underline not-italic">MTN</i>
                </span>
              </div>
              <p className={cn("font-normal text-center mt-6 w-11/12 mx-auto")}>
                Scan and follow prompts on phone to complete donation. Close to
                return to obituary after transaction.
              </p>
              <p className={cn("font-normal text-center mt-6 w-11/12 mx-auto")}>
                QR code transactions are NOT processed by Damirifa. To receive
                status updates, send a message with your donation, and placement
                on donor list, use the Standard Method.
              </p>
            </div>
            {/* </Collapse> */}
          </>
        ) : (
          <></>
        )}
      </div>
      <Link
        href="/pages#"
        passHref
        variant="secondary"
        className="text-damirifa-red-2 mb-6 mt-4 block mx-auto text-center"
      >
        View Terms and Conditions
      </Link>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center mt-10 mb-5">
        <Button
          outline
          variant="primary"
          size="md"
          pill
          onClick={() => stepper.previousStep()}
          label="Back"
        />
        {/* <Button
          pill
          variant="primary"
          size="md"
          className="mb-polyfill"
          onClick={() => stepper.nextStep()}
          label="Continue"
        /> */}
      </div>
    </section>
  );
};

export default SelectPaymentMethod;
