'use client';
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

type Props = WizardChildRef & {};

export function FormList(props: any) {
  const navigator = useCSR();
  const [selectValue, setSelectedValue] = useState("family");
  return (
    <>
      <SectionOptions label="Funeral Fund" formType="funeral-fund" />
      <div className="w-full">
        <p className={s.heading3}>Select Fund Type to Proceed</p>
        <ul className={s.list}>
          <AccordionCard
            key={uuid()}
            className={s.card}
            role="button"
            Component="button"
            onClick={() => {
              // console.log("dashboard.announcement.landing", "hello");
              selectValue === "family" &&
                navigator.setRoute(ViewTree.FAMILY_FUND);
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
                navigator.setRoute(ViewTree.CHARITABLE_FUND);
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
              <BiInstitutionalFund />
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
    </>
  );
}

const EditFuneralFund: React.FC<Props> = (props) => {
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

export default React.memo(EditFuneralFund);
