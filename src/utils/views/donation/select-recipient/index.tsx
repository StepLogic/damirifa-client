import React from "react";
// import styled from 'styled-components'
// import dynamic from 'next/dynamic'
// import Poster from '@components/poster'
// import Divider from '@components/ui/divider/divider'
// import {
//   Container as RootContainer,
//   Collapse,
//   Dropdown,
//   Accordion,
// } from 'react-bootstrap'
import { Button, Image, Link, Select } from "@components/ui/common";

import s from "./index.module.css";
import cn from "classnames";

import { StepperProps } from "@common-ui//step-wizard";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   p {
//     font-weight: 500;
//     font-size: 1.0625rem;
//     line-height: 1.5rem;
//     /* or 141% */
//     text-align: center;
//     color: rgba(0, 0, 0, 0.9);
//   }
// `
interface Props extends StepperProps {
  isInstitutional?: boolean;
}

const SelectRecipient = (props: Props) => {
  const option = [
    "Jane Doe (Widower)",
    "Angel Mensah (Child)",
    "Martin Anson (Parent)",
  ];
  return (
    <section className="flex flex-col w-full px-4 md:px-20">
      <p className={cn("mt-4 mb-5", s.p)}>
        As we grieve the loss of our beloved, we have set up a funeral fund for
        those wanting to make donations to the family. All proceeds are sent
        directly to the recipient you select and will go towards the funeral and
        supporting the family. We invite you to share this page to help further
        this fund. We greatly appreciate any contributions.
      </p>
      {props.isInstitutional ? (
        <>
          <label className="mb-2 w-full text-xl text-center font-bold text-left mt-6">
            Donate To&nbsp;
            <Link
              variant="secondary"
              href="https://web.facebook.com/pages/category/Interest/Osu-Childrens-Home-Accra-148449418498836/?_rdc=1&_rdr"
            >
              Osu Children Home
            </Link>
          </label>
          <Image
            className={cn(s.banner, "")}
            src={"/assets/logo/osu.jpeg"}
            objectFit="contain"
            alt={"SVG QR code"}
          />
        </>
      ) : (
        <>
          <label className="text-damirifa-light-grey  mb-2 w-full text-left mt-16">
            Select recipient
          </label>
          <Select
            options={option}
            variant="secondary"
            // placeholder='Select recipient'
          />
          <span className="text-damirifa-light-grey mt-4 mb-12">
            <b className="text-damirifa-red-2">Please note:&nbsp;&nbsp;</b>
            Donations are sent directly to the widow(er), adult children, or
            parent(s) of the deceased only.
          </span>
        </>
      )}
      <Button
        className="mx-auto mt-16 mb-5"
        variant="primary"
        size="md"
        pill
        onClick={() => props.nextStep()}
        label={"Proceed To Donate"}
      />
    </section>
  );
};

export default SelectRecipient;
