"use client";
import s from "../index.module.css";
import React, { useEffect, useRef, useState } from "react";

import cn from "classnames";
import ViewHeading from "@components/ViewHeading";
import AddButton from "@components/AddButton";
import TabPane from "@components/tab-pane";
import { Image } from "@common-ui/index";
import { BiEdit } from "@components/icons";
import { Button } from "@components/ui/dashboard";
import { BiEditFill, BiHeartEnvelope } from "@components/icons";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import { BiNewWindow, BiDonate } from "@components/icons";
import {
  AiFillEye,
  AiOutlineArrowDown,
  AiOutlineEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";
import Badge from "@components/Badge";

import { useRouter } from "next/navigation";
import { NextPageContext } from "next/types";
import { getPosts } from "@root/src/app/(dashboard)/(overview)/announcements/apiClient";
import moment from "moment";
// import { Announcement } from '../../../lib/FeaturedAnnouncment';

type AnnouncementType = {
  isDraft: boolean;
  id: string;
  type: "obituary" | "death notice" | "one week";
};
function AnnouncementItem(props: AnnouncementType) {
  const { isDraft, type, id, published, label, datePurchased } = props;
  const f = moment().endOf("day").diff(moment(datePurchased), "weeks");
  const router = useRouter();
  return (
    <li className={cn(s.grid, s.announcementItem)}>
      <div className="flex flex-row gap-[35px]">
        <Image
          src={"/constants/image-announcement.jpg"}
          alt={"announcement image"}
          className={s.image}
        />
        <div className="flex flex-col py-2">
          <p className={s.heading}>{label}</p>
          <div className="flex flex-row items-center gap-2 mt-1 mb-1">
            <Badge className={""} bgColor={"#EDCFD0"} textColor={"#BA181B"}>
              {type}
            </Badge>
            <p className={s.timeLasted}>
              {f === 0 ? `just now` : `${f} weeks ago`}
            </p>
          </div>
          <p className="text-[#B55E5E] opacity-70  text-[11px] leading-[140%]">
            Expires in <b>8 months</b>
          </p>
          <div className="flex flex-row gap-4 mt-auto items-center">
            <Button
              showTooltip="Edit"
              variant="icon"
              className="!p-0 text-2xl"
              onClick={() => router.push("announcements/" + id)}
            >
              <BiEditFill color="#777777" />
            </Button>
            {type && (
              <Button
                showTooltip="Condolences"
                variant="icon"
                className="!p-0 text-2xl"
              >
                <BiHeartEnvelope color="#777777" />
              </Button>
            )}
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
            >
              <BiNewWindow color="#777777" />
            </Button>
            <Button
              showTooltip="Edit Announcement"
              variant="icon"
              className="!p-0 text-2xl"
            >
              <BiDonate color="#777777" />
            </Button>
            <OptionsButtonTwo />
          </div>
        </div>
      </div>
      <div className={"flex flex-row items-center mb-auto"}>
        {isDraft ? (
          <AiFillEyeInvisible
            className="text-xl opacity-70"
            color="#000000;
            "
          />
        ) : (
          <AiFillEye className="text-xl" color="#50AAA6" />
        )}
        <p className="ml-2 mr-8  text-[#5E5E5E] text-[14px] px-[3px] py-[9px]">
          {isDraft ? "Draft" : "Live"}
        </p>
        <BsCaretDownFill />
      </div>
      <div className={"flex flex-col py-2"}>
        <p className="text-[#5E5E5E]  text-[14px] leading-[140%]">
          Jun 21, 2022
        </p>
        <p className="text-[#5E5E5E] opacity-70  text-[12px] leading-[140%]">
          {published ? "Published" : "Draft"}
        </p>
      </div>
      <div className={"flex flex-col py-2"}>
        {isDraft ? (
          <div className="!bg-[#BA181B] !mt-[16px] h-[2px] w-[10px] mb-[4px]" />
        ) : (
          <p className="text-[#5E5E5E] tracking-[0.0041em] text-[20px] leading-[140%]">
            72
          </p>
        )}
        {isDraft ? (
          <p className="text-[#5E5E5E] text-[12px] font-[400] opacity-70 ">
            Not setup
          </p>
        ) : (
          <p className="text-[#065FD4] opacity-70  text-[12px] leading-[140%]">
            All condolences
          </p>
        )}
      </div>
      <div className={"flex flex-col py-2"}>
        {isDraft ? (
          <div className="!bg-[#BA181B] !mt-[16px] h-[2px] w-[10px] mb-[4px]" />
        ) : (
          <p className="text-[#5E5E5E] tracking-[0.0041em] text-[14px] leading-[140%]">
            GHS 5,490.00
          </p>
        )}
        {isDraft ? (
          <p className="text-[#5E5E5E] text-[12px] font-[400] opacity-70">
            Not setup
          </p>
        ) : (
          <p className="text-[#065FD4] opacity-70  text-[12px] leading-[140%]">
            All condolences
          </p>
        )}
      </div>
    </li>
  );
}

function AnnouncementItemNotSetup(props) {
  const { id, type, label, datePurchased } = props;
  const f = moment().endOf("day").diff(moment(datePurchased), "weeks");
  const router = useRouter();
  return (
    <div className={s.obituaryNotSetup}>
      <Image
        src={"/constants/image-announcement.jpg"}
        alt={"announcement image"}
        className={s.image}
      />
      <div className="flex flex-col py-[1.25rem] w-full">
        <p className={s.heading}>{label}</p>
        <Badge
          className={"font-[500] w-[64px] lowercase"}
          bgColor={"#EDCFD0"}
          textColor={"#BA181B"}
        >
          {type}
        </Badge>
        <p className={s.timeLasted}>
          Purchased <b>{f === 0 ? `just now` : `${f} weeks ago`}</b>
        </p>
        <Button
          variant="outline"
          onClick={() => router.push("announcements/" + id)}
          color="secondary"
          className="!text-[#BA181B] text-[14px] font-[500] !h-[36px] mt-auto ml-auto"
          label={"Setup"}
        />
      </div>
    </div>
  );
}

export default function AllAnnouncements(props) {
  const [state, setState] = useState([]);
  const navigator = useCSR();
  useEffect(() => {
    getPosts().then((r) => {
      setState(r);
      console.log("log", r);
    });
  });
  return (
    <div className={cn("flex flex-col scrollbar", s.view)}>
      <div className={cn(s.grid, "mb-4 pl-[19px]")}>
        <p>{"Announcement"}</p>
        <p>{"Status"}</p>
        <p className="flex flex-row gap-4 items-center">
          {"Date"} <AiOutlineArrowDown />
        </p>
        <p>{"Condolences"}</p>
        <p>{"Donations"}</p>
      </div>
      <ul className={cn(s.list, "scrollbar")}>
        {state.map((r) =>
          Object.values(r.data).length > 0 ? (
            <AnnouncementItem
              id={r.id}
              label={r.label}
              type={r?.package?.product?.name}
              isDraft={r.published}
              datePurchased={r.createdAt}
            />
          ) : (
            <AnnouncementItemNotSetup
              id={r.id}
              label={r.label}
              type={r?.package?.product?.name}
              datePurchased={r.createdAt}
            />
          )
        )}
      </ul>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-6 mt-[2.875rem] mb-[1.125rem]">
          <Badge
            className={"font-[500]"}
            bgColor={"#E8F1EE"}
            textColor={"#2DA378"}
          >
            2 New
          </Badge>
          <p>Pending Setup</p>
        </div>
      </div>
    </div>
  );
}
