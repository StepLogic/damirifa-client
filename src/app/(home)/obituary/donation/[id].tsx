import SelectRecipient from "@views/donation/select-recipient";
import React, { useState, useEffect } from "react";
// import { Container as RootContainer } from 'react-bootstrap'
import { IoMdShare } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

// import styled from 'styled-components'
// import ResponsiveImage from '@components/ui/image'
import { Button, Image, StepWizard, Tooltip } from "@common-ui/index";
import { useRouter } from "next/router";
import SelectPaymentMethod from "@views/donation/select-payment-method";
import EnterDonationAmount from "@views/donation/enter-donation-amount";
import DonationSummary from "@views/donation/donation-summary";
import { MetaTags } from "@lib/Utils";
import s from "./index.module.css";
import cn from "classnames";
import { ImWarning } from "react-icons/im";

export default function Donation() {
  const router = useRouter();
  const [hideCloseButton, toggelHideCloseButton] = useState(false);
  return (
    <>
      <MetaTags title={"Donation"} />
      <div className={s.root}>
        <Image
          src={"/constants/obituary-image.jpeg"}
          loading="lazy"
          circle
          className={s.deceasedImage}
          objectFit={"cover"}
          objectPosition="center"
          alt="deceasd photo"
        />
        <h1 className="text-white text-lg mt-4">Kwadwo J. Kobi</h1>
        <h2 className="fs-1 text-white  text-4xl mb-16">Funeral Fund</h2>
        <div className={cn("container relative mx-auto", s.container)}>
          <Button
            pill
            outline
            variant="primary"
            size="md"
            className={cn("bg-white flex flex-row mx-auto", s.shareButton)}
            onClick={() => {
              router.push("/obituary/1");
            }}
          >
            <IoMdShare className="mr-2 ml-auto text-damirifa-red" />
            <span className="mr-auto text-damirifa-red">Share</span>
          </Button>
          {hideCloseButton ? (
            <></>
          ) : (
            <div className="flex flex-row items-center">
              {/* <Button
                icon
                size="md"
                className={cn("mx-auto", s.closeButton)}
                onClick={() => {}}
              >
                <Tooltip message="Report Suspicious Activity">
                  <ImWarning className="text-damirifa-red" />
                </Tooltip>
              </Button> */}

              <Button
                icon
                className={cn("mr-4 ml-auto", s.closeButton)}
                onClick={() => router.push("/obituary/1")}
              >
                <span className=" mr-3">Close</span>
                <AiOutlineClose className="" />
              </Button>
            </div>
          )}
          <div className={cn("mx-auto lg:pb-5 lg:mb-5", s.content)}>
            <StepWizard
            // instance={(SW: any) => setInstance(SW)}
            >
              <SelectRecipient />
              <SelectPaymentMethod hasQrCode={true} />
              <EnterDonationAmount />
              <DonationSummary />
            </StepWizard>
          </div>
        </div>
      </div>
    </>
  );
}
// const Container = styled.layout`
//   display: flex;
//   flex-direction: column;
//   background: var(--damirifa-black);
//   align-items: center;
//   padding-top: 4rem;
//   padding-bottom: 5rem;
//   & .deceased-image {
//     width: 9.9375rem;
//     aspect-ratio: 1;
//   }
//   & .container {
//     padding-top: 1.375rem;
//     border-radius: 10px;
//     max-width: 827px;
//     width: 95%;
//     & .content {
//       max-width: 470px;
//     }
//     /* aspect-ratio: 827/777;
//     @media only screen and (max-width: 763px) {
//       aspect-ratio: 777/ 827;
//     } */
//     & .share-button {
//       position: absolute;
//       top: -22.5px;
//       left: 0;
//       right: 0;
//       z-index: 5;
//     }
//     & .close-button {
//       color: rgba(13, 13, 13, 0.3);
//     }
//     & .close-button:hover {
//       color: var(--damirifa-red);
//     }
//     background: #f8f8f8;
//   }
// `
