import React, { useState } from "react";
// import styled from 'styled-components'
// import Poster from '@components/poster'
// import Divider from '@components/ui/divider/divider'
// import {
//   Container as RootContainer,
//   Collapse,
//   Dropdown,
//   Accordion,
// } from 'react-bootstrap'
import {
  Button,
  CheckBox,
  Collapse,
  Scrollbar,
  TextArea,
} from "@components/ui/common";

import { AiOutlineCaretDown } from "react-icons/ai";

// import {  } from "@components/ui";
import s from "./index.module.css";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

const EnterDonationAmount = (props: any) => {
  const option = [
    { label: "GHS 50", value: 50 },
    { label: "GHS 100", value: 100 },
    { label: "GHS 200", value: 200 },
    { label: "GHS 500", value: 500 },
  ];
  const [amount, setAmount] = useState<number>(0);
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <Scrollbar>
      <section className={cn(s.root, "px-4 md:px-20")}>
        <p className="mt-4 mb-8 text-capitalize text-center lg:text-left text-lg font-normal">
          Select or enter amount to donate to&nbsp;
          <span className="text-damirifa-red-2">Jane Doe</span>
        </p>
        {/* <span className='block text-damirifa-red capitalize text-center xl:text-left w-full mt-4'>
          Select from amount below:
        </span> */}
        <div className="flex flex-1 flex-row flex-wrap lg:flex-nowrap items-center justify-center mb-6">
          {option.map((item: any) => (
            <Button
              className={cn(
                "flex items-center justify-center mx-3 mx-lg-1 my-3 mb-lg-4",
                s.pricePill
              )}
              key={uuidv4()}
              pill
              onClick={() => setAmount(Number(item.value))}
              label={item.label}
            />
          ))}
        </div>
        <label className="text-damirifa-light-grey capitalize mb-3">
          Or enter donation amount
        </label>
        <div className={cn("w-full mb-6", s.inputGroup)}>
          <div className={cn("input-preappend", s.inputPreappend)}>
            <div className="faux-svg">
              <svg width="30" height="20">
                <image
                  width="30"
                  height="20"
                  xlinkHref="/assets/logo/ghana.png"
                ></image>
              </svg>
            </div>
            <span className="text-black mx-1 border-right pr-2">GHS</span>
          </div>
          <input
            min="1"
            step="any"
            className={s.input}
            type="number"
            value={amount === 0 ? "" : amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </div>
        <button
          onClick={() => {
            // console.log("Click");
            setExpand(!expand);
            // console.log(expand);
          }}
          className={cn(
            "text-black underline text-left capitalize mb-2 hover:cursor-pointer",
            s.underline
          )}
        >
          Compare amount in other currencies
        </button>
        <Collapse isOpen={expand}>
          <div className="flex flex-col">
            <div className={cn("w-full mb-3", s.inputGroup)}>
              <div className={cn("input-preappend", s.inputPreappend)}>
                <div className="faux-svg">
                  <svg width="30" height="20">
                    <image
                      width="30"
                      height="20"
                      xlinkHref="/assets/logo/ghana.png"
                    ></image>
                  </svg>
                </div>
                <span className="text-black mx-1  ">GHS</span>
                <AiOutlineCaretDown className="text-damirifa-red border-right pe-2" />
              </div>
              <input min="1" step="any" className={s.input} type="number" />
            </div>
            <label className="text-damirifa-light-grey mb-4">
              <b className="text-damirifa-red">Note:</b>&nbsp;Currency
              conversion for comparison only. Recipient will receive donation in
              GHS only.
            </label>
          </div>
        </Collapse>
        <label className="text-damirifa-light-grey mb-2">
          Send recipient a message (optional)
        </label>
        <TextArea
          variant="secondary"
          className={cn(s.privateMessage, "mb-6")}
          placeholder={"Maximum 200 words"}
        />
        <b className="text-damirifa-light-grey mb-4">
          Please acknowledge:&nbsp;
        </b>
        {/* <div className="flex flex-row mb-6">
          <CheckBox
            checked={false}
            variant="secondary"
            id="box1"
            className="mr-3 mt-1"
          />
          <span className="text-damirifa-light-grey ">
            Recipient will receive donations in GHS. Standard mobile money,
            government fees and bank charges may apply. Damirifa charges a
            service fee of 0.05% for this transaction.
          </span>
        </div> */}
        <div className="flex flex-row mb-6">
          {/* ID is very important make sure to  set ID prop*/}
          <CheckBox
            checked={true}
            variant="secondary"
            id="box2"
            className="mr-3 mt-1"
          />
          <span className="text-damirifa-light-grey ">
            Please display my name in the donor list on the obituary website
            (the amount donated will not be displayed).
          </span>
        </div>
        <div className="flex flex-row mb-6">
          {/* ID is very important make sure to  set ID prop*/}
          <CheckBox
            checked={true}
            variant="secondary"
            id="box2"
            className="mr-3 mt-1"
          />
          <span className="text-damirifa-light-grey ">
            You may display my message on the obituary page (deselect this
            option if you want your message to remain private)
          </span>
        </div>
        <span className="mb-12 text-damirifa-light-grey">
          <span className="text-damirifa-red">{`Jane Doe`}</span> will recive
          your donation shortly. Both you and &nbsp;
          <span className="text-damirifa-red">{`Jane Doe`}</span> will be
          notifed upon delivery.
        </span>
        <div className="flex flex-col-reverse items-center md:flex-row gap-4 justify-center mt-16 mb-5">
          <Button
            outline
            variant="primary"
            size="md"
            pill
            onClick={() => props.previousStep()}
            label="Back"
            className="mb-polyfill"
          />
          <Button
            pill
            variant="primary"
            size="md"
            className="mb-polyfill"
            onClick={() => props.nextStep()}
            label="Continue"
          />
        </div>
      </section>
    </Scrollbar>
  );
};

export default EnterDonationAmount;
