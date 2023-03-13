"use client";
import React, { ComponentType, useEffect } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { AccordionCard } from "@components/ui/dashboard";
import { Image } from "@common-ui/index";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import {
  BiEdit,
  BiFuneralFund,
  BiGuestPhotos,
  BiUpgrade,
} from "@components/icons";
import { uuid } from "@lib/Utils";
import { BsChevronRight } from "react-icons/bs";
import { useCSR } from "@components/navigator";
import Badge from "@components/Badge";
import AnnouncementLayout from "@layouts/dashboard/announcement";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { getPost } from "./apiClient";
import moment from "moment";

type Props = WizardChildRef & {};
export const ObituaryOptions: Array<{
  label: string;
  description: string;
  icon: ComponentType;
  name: string;
  status?: string;
  disabled?: boolean;
}> = [
  {
    label: "Edit Announcement",
    description: "Fill or Update Deceased Information",
    icon: BiEdit,
    name: "edit-announcement",
  },
  {
    label: "Funeral Fund",
    description: "Fill or Update Announcement Information",
    icon: BiFuneralFund,
    name: "edit-funeral-fund",
  },
  {
    label: "Prime Spots",
    description: "Upload or Update Obituary Media(photos, videos, audios)",
    icon: BiGuestPhotos,
    name: "upgrades",
    disabled: true,
    status: "Coming Soon",
  },
];
export const OneWeekOptions: Array<{
  label: string;
  description: string;
  icon: ComponentType;
  name: string;
  status?: string;
  disabled?: boolean;
}> = [
  {
    label: "Edit Announcement",
    description: "Fill or Update Deceased Information",
    icon: BiEdit,
    name: "edit-announcement",
  },
  {
    label: "Funeral Fund",
    description: "Fill or Update Announcement Information",
    icon: BiFuneralFund,
    name: "edit-funeral-fund",
  },
];
export const DeathNoticeOptions: Array<{
  label: string;
  description: string;
  icon: ComponentType;
  name: string;
  status?: string;
  disabled?: boolean;
}> = [
  {
    label: "Edit Announcement",
    description: "Fill or Update Deceased Information",
    icon: BiEdit,
    name: "edit-announcement",
  },
];
const Page: React.FC<Props> = ({ params }) => {
  const router = useRouter();

  const path = usePathname();
  console.log("path", path.trim().split("/"));
  const { id } = params;
  const [state, setState] = useState({});

  useEffect(() => {
    getPost().then((r) => {
      console.log("log", r);
      setState(r);
    });
  }, [id]);

  return (
    <div className={cn(s.root, "")}>
      <div className={s.gridOne}>
        <div className={s.announcementInformation}>
          <Image
            src={"/constants/image-announcement.jpg"}
            className={s.image}
          />
          <div role="text" className={s.title}>
            {state?.label}
          </div>
          <div className="flex flex-row items-center gap-[0.4063rem]">
            <div role="text" className={s.badge}>
              {state?.package?.product?.name ?? "loading"}
            </div>
            <div role="text" className={s.time}>
              {moment().endOf("day").diff(moment(state?.createdAt), "weeks") ===
              0
                ? `just now`
                : `${f} weeks ago`}
            </div>
          </div>
        </div>
      </div>
      <div className={s.gridTwo}>
        <h3 className={s.title}>Hi! What do you want to do? </h3>
        <div className={s.options}>
          {Object.values(state.schema ?? {}).length > 0 && (
            <AccordionCard
              className={s.card}
              role="button"
              Component="button"
              onClick={() => {
                router.push(`${path}/${"edit-announcement"}/${id}`);
              }}
            >
              <div className={s.icon}>
                <BiEdit />
              </div>
              <div className="flex flex-col gap-1">
                <p>{"Edit Announcement"}</p>
              </div>
              <BsChevronRight className={s.arrowSvg} />
            </AccordionCard>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
