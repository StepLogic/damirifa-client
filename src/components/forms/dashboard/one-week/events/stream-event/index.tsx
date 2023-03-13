import OptionsButton from "@components/OptionsButton";
import { Accordion } from "@components/ui/dashboard";
import cn from "classnames";
import React, { useState } from "react";

import s from "./index.module.css";

type DetailsProps = {
  timeStatus?: "passed" | "current" | "upcoming";
};

function Details({ timeStatus = "passed" }: DetailsProps) {
  return (
    <>
      <li className="flex flex-row flex-[100%]">
        <time className={s.timeLocation}>04:30 PM</time>
        <div data-time={timeStatus} className={cn(s.event, s.bar)}>
          <div className={s.row}>
            <p className={s.heading}>Final Funeral Rite - Day 1</p>
            <OptionsButton />
          </div>
          <div className={s.detailsItem}>
            <p className={s.label}>streams on:&nbsp;</p>
            <p className={s.value}>Youtube</p>
          </div>
          <div className={s.detailsItem}>
            <p className={s.label}>stream link:&nbsp;</p>
            <p className={cn(s.value, s.pill)}> AK-0998-57</p>
          </div>
          <div className={s.detailsItem}>
            <p className={s.label}>Information:&nbsp;</p>
            <p className={s.value}>Hide if null</p>
          </div>
        </div>
      </li>
    </>
  );
}

const StreamEvent = () => {
  return (
    <>
      <Accordion className={s.accordion}>
        <Accordion.Header className={s.item}>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-1">
              <p className={s.heading}>Sunday, June 20, 2022</p>
              <div className={s.badge}>3</div>
            </div>
            <p className={s.heading2}>
              <div className={s.badge}>3</div>
              <b className="text-[5E5E5E]">Live stream</b>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body className={"bg-white pb-2"}>
          <div className="w-full">
            <hr className="border-solid border-[1px]  mb-4" />
            <ol
              className={cn(
                s.details,
                "relative w-full flex flex-col gap-[1rem]"
              )}
            >
              <Details timeStatus="passed" />
              <Details timeStatus="current" />
              <Details timeStatus="upcoming" />
            </ol>
          </div>
        </Accordion.Body>
      </Accordion>
    </>
  );
};
export default React.memo(StreamEvent);
