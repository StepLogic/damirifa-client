import { BiFamilyFund, BiInstitutionalFund } from "@components/icons";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import SectionOptions from "@components/section-options";
import { AccordionCard, RadioButton } from "@components/ui/dashboard";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import LivePreviewMini from "@features/dashboard/live-preview-mini";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import cn from "classnames";
import s from "./index.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import AnnouncementLayout from "@layouts/dashboard/announcement";
// import { RiHomeHeartLine } from "react-icons/ri";
import { BiHomeHeart } from "react-icons/bi";
import TermsOfService from "@components/tos";

type Props = WizardChildRef & {};

export function FormList(props: any) {
  // const navigator = useCSR();
  const router = useRouter();
  const [selectValue, setSelectedValue] = useState("family");
  const Icon = () => <BiHomeHeart className="text-[1.8rem]" />;
  const [accepted, setAccepted] = useState(false);
  return !accepted ? (
    <TermsOfService handleAccepted={() => setAccepted(true)} />
  ) : (
    <div className={s.fieldList}>
      <div className={s.formSections}>
        <SectionOptions label="Funeral Fund" formType="funeral-fund" />
        <div className="w-full">
          <p className={s.heading3}>Select Fund to Proceed</p>
          <ul className={s.list}>
            <AccordionCard
              key={uuid()}
              className={s.card}
              role="button"
              Component="button"
              onClick={() => {
                // console.log("dashboard.announcement.landing", "hello");
                selectValue === "family" &&
                  router.push("/dashboard/1/edit-funeral-fund/family-fund");
              }}
            >
              <RadioButton
                checked={selectValue === "family"}
                onChange={(e) =>
                  event?.target.checked && setSelectedValue("family")
                }
                className="mr-4"
              />
              <div className={s.icon}>
                <BiFamilyFund />
              </div>
              <div className="flex flex-col items-start">
                <p className={s.heading}> Family Fund</p>
                <p className={cn(s.description, "hidden lg:block")}>
                  Funds go to designated family members
                </p>
              </div>
              {selectValue === "family" && (
                <BsChevronRight className={s.arrowSvg} />
              )}
            </AccordionCard>
            <AccordionCard
              key={uuid()}
              className={s.card}
              role="button"
              Component="button"
              onClick={() => {
                selectValue === "charity" &&
                  router.push(
                    "/dashboard/1/edit-funeral-fund/institutional-fund"
                  );
              }}
            >
              <RadioButton
                onChange={(e) =>
                  event?.target.checked && setSelectedValue("charity")
                }
                checked={selectValue === "charity"}
                className="mr-4"
              />
              <div className={s.icon}>
                <Icon />
              </div>
              <div className="flex flex-col items-start">
                <p className={s.heading}>Charitable Fund</p>
                <p className={cn(s.description, "hidden lg:block")}>
                  Funds go to your designated charity
                </p>
              </div>
              {selectValue === "charity" && (
                <BsChevronRight className={s.arrowSvg} />
              )}
            </AccordionCard>
          </ul>
        </div>
      </div>
    </div>
  );
}
export const EditFuneralFund: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={s.root}>
      <LivePreviewMini />
      <div className={s.fieldList}>
        <div className={s.formSections}>{children}</div>
      </div>
    </div>
  );
};
FormList.Layout = AnnouncementLayout;
export default FormList;
