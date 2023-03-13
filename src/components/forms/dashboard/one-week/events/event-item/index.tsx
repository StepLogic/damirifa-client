import s from "./index.module.css";

import OptionsButton from "@components/OptionsButton";
import { Accordion } from "@components/ui/dashboard";
import cn from "classnames";
import React, { useState } from "react";
import { BiStreamLink } from "@components/icons";

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
          <div className="flex flex-col gap-[4px]">
            <div className={s.detailsItem}>
              <p className={s.label}>Time:&nbsp;</p>
              <p className={s.value}>12 AM - 6:30 AM</p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Place:&nbsp;</p>
              <p className={cn(s.value)}>SDA Park, Kontokrom</p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Physical Address:&nbsp;</p>
              <p className={cn(s.value)}>SDA Park, Kontokrom</p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Digital Address:&nbsp;</p>
              <p className={cn(s.value)}>AK-0998-57</p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Google Map: &nbsp;</p>
              <p className={cn(s.value, s.pill, " !lowercase")}>
                <BiStreamLink />
                <p>www.domain.extension/route?query</p>
              </p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Dress Code:&nbsp;</p>
              <p className={cn(s.value)}>White on Black</p>
            </div>
            <div className={s.detailsItem}>
              <p className={s.label}>Note:&nbsp;</p>
              <p className={s.value}>Notes go here</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

const EventItem = () => {
  return (
    <>
      <Accordion className={s.accordion}>
        <Accordion.Header className={s.item}>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center gap-1">
              <p className={s.heading}>Sunday, June 19, 2022</p>
            </div>
            <div className={s.heading2}>
              <div className={s.badge}>3</div>
              <p className="text-[5E5E5E]">Events</p>
            </div>
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
export default React.memo(EventItem);
