'use client';
import React, { ComponentType } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { AccordionCard } from "@components/ui/dashboard";
import { Image } from "@components/ui/common";
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

type Props = WizardChildRef & {};
export const menuOptions: Array<{
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
  // {
  //   label: "Guest Photos",
  //   description: "Add or Update Event Information",
  //   icon: BiGuestPhotos,
  //   name: "guest-photos",
  // },
];
const AnnouncementView: React.FC<Props> = (props) => {
  const navigator = useCSR();
  return (
    <div className={cn(s.root, "")}>
      <div className={s.gridOne}>
        <div className={s.announcementInformation}>
          <Image
            src={"/constants/image-announcement.jpg"}
            className={s.image}
          />
          <div role="text" className={s.title}>
            Mariam Makiba
          </div>
          <div className="flex flex-row items-center gap-[0.4063rem]">
            <div role="text" className={s.badge}>
              Obituary
            </div>
            <div role="text" className={s.time}>
              3 weeks
            </div>
          </div>
        </div>
      </div>
      <div className={s.gridTwo}>
        <h3 className={s.title}>Hi! What do you want to do? </h3>
        <div className={s.options}>
          {menuOptions.map((option) => {
            const Icon = option.icon;
            return (
              <AccordionCard
                key={uuid()}
                data-disabled={`${option.disabled}`}
                className={s.card}
                role="button"
                Component="button"
                onClick={() => {
                  !option.disabled &&
                    navigator.setRoute(`/announcement/${option.name}`);
                }}
              >
                <div className={s.icon}>
                  <Icon />
                </div>
                <div className="flex flex-col gap-1">
                  <p>{option.label}</p>
                  {option.status && (
                    <Badge
                      textColor={"#065fd4"}
                      className={"w-[64px] !text-[7px]"}
                      bgColor={"#cae1ff"}
                    >
                      {option.status}
                    </Badge>
                  )}
                </div>
                <BsChevronRight className={s.arrowSvg} />
              </AccordionCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementView;
