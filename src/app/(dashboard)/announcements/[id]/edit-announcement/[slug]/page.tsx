"use client";
import ObituaryDeceasedInformation from "@dashboard-forms/obituary/DeceasedInformation";
import ObituaryEvents from "@dashboard-forms/obituary/events";
import ObituaryFamily from "@dashboard-forms/obituary/Family";
import ObituaryMedia from "@dashboard-forms/obituary/media";
import ObituaryTitleAndBiography from "@dashboard-forms/obituary/TittleAndBiography";
import ObituaryTributes from "@dashboard-forms/obituary/tributes";
import OneWeekDeceasedInformation from "@dashboard-forms/one-week/DeceasedInformation";
import OneWeekEvents from "@dashboard-forms/one-week/events";
import OneWeekMedia from "@dashboard-forms/one-week/media";
import OneWeekTitleAndContactPerson from "@dashboard-forms/one-week/TittleAndContactPerson";
import DeathNoticeDeceasedInformation from "@dashboard-forms/death-notice/DeceasedInformation";
import DeathNoticeTitleAndContactPerson from "@dashboard-forms/death-notice/TitleAndContactPerson";
import DeathNoticeMedia from "@dashboard-forms/death-notice/media";
import {
  BiAnnouncement,
  BiAnnouncementCreate,
  BiEvents,
  BiFamily,
  BiMedia,
  BiTribute,
} from "@components/icons";
import SectionOptions from "@components/section-options";
import { Button, RadialProgress } from "@components/ui/dashboard";
import Accordion from "@components/ui/dashboard/accordion";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import LivePreviewMini from "@features/dashboard/live-preview-mini";
import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import cn from "classnames";

import s from "./index.module.css";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import TermsOfService from "@components/tos";
import { useModalContext } from "@root/src/utils/contexts/ModalContext";
import { getPost, updatePost } from "../../apiClient";
import Component from "./Component";
import * as Label from "@radix-ui/react-label";
import * as _ from "lodash";
import { formatTextFromCamel } from "@root/src/utils/text.maipulation";

type Props = WizardChildRef & {};

export const DeathNoticeFields: Array<{
  label: string;
  description: string;
  icon: React.ComponentType;
  component: React.ComponentType;
}> = [
  {
    label: "Deceased Information",
    description: "Add or Update Deceased Information",
    icon: BiAnnouncementCreate,
    component: DeathNoticeDeceasedInformation,
  },
  {
    label: "Title and Contact Person",
    description: "Add or Update Title and Contact Person",
    icon: BiAnnouncement,
    component: DeathNoticeTitleAndContactPerson,
  },
  {
    label: "Media",
    description: "Add or Update Photos, Videos and Audios",
    icon: BiMedia,
    component: DeathNoticeMedia,
  },
];

const TOS = () => {
  const terms = `
Only the widow(er), Parent or adult child of the deceased are eligible to receive funds donated. An eligible recipient must be selected to receive funds donated to the family.  

  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nStandard mobile money and bank fees apply.
  \nTo minimize fraud, we will require additional information to validate the relationship of funds recipients to the deceased. This could take up to 48 hours. The fund will display on your obituary page ONLY after validation is complete.
  `;
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] max-w-[545px] max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar pb-4">
      <p
        style={{ whiteSpace: "break-spaces" }}
        className="text-[1rem] p-4 rounded-sm bg-[#f5f5f5] whitespace-[break]"
      >
        {terms}
      </p>
    </div>
  );
};
// function FuneralFundHeader({ title, Icon }: Props) {

const EditAnnouncement: React.FC<Props> = ({ params }) => {
  const [expand, setExpand] = useState(false);
  const [accepted, setAccepted] = useState(true);
  const modal = useModalContext();
  const router = useRouter();
  const { slug } = params;
  const [state, setState] = useState({});

  const onUpdate = async (label, value) => {
    const u = async () => {
      console.log("r", value);
      const r = { ...state.data };
      r[label] = value;
      const l = await updatePost(r);
      console.log("l", l);
    };

    _.delay(u, 1000, []);
  };
  useEffect(() => {
    getPost().then((r) => setState(r));
    console.log("ge");
  }, [slug]);

  return !accepted ? (
    <TermsOfService handleAccepted={() => setAccepted(true)} />
  ) : (
    <div className={s.root}>
      <LivePreviewMini />
      <div className={s.fieldList}>
        <SectionOptions label="Edit Announcement" formType="announcement" />
        <div className={s.formSections}>
          <div className="flex flex-row mb-4">
            <Button
              size="sm100"
              variant="outline"
              color="dark"
              label={expand ? "Collapse All" : "Expand All"}
              className={s.expandButton}
              onClick={() => setExpand((current) => !current)}
            />
            <button
              onClick={() => modal.openModal(<TOS />, "Important Information")}
              className={
                "text-[#065fd4] mt-auto ml-auto font-medium text-xs underline mr-3"
              }
            >
              <AiOutlineInfoCircle className="text-sm ml-auto w-4 h-4 text-[#065fd4]" />
            </button>
          </div>

          <ul className={cn(s.list, "scrollbar")}>
            {state?.schema &&
              Object.entries(state?.schema).map((form) => {
                const Icon = form[1]?.logo
                  ? (form[1].logo as React.ComponentType<{
                      className?: string;
                    }>)
                  : BiTribute;

                return (
                  <Accordion
                    id={form[0]}
                    expand={expand}
                    key={uuid()}
                    className={s.accordion}
                  >
                    <Accordion.Header className={s.item}>
                      <div className="flex flex-row items-center gap-2">
                        <RadialProgress className={s.iconContainer}>
                          <Icon className={s.icon} />
                        </RadialProgress>
                        <div className="flex flex-col gap-[5px]">
                          <h5>{formatTextFromCamel(form[0])}</h5>
                          <p>{form[1]?.description ?? "No Description"}</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className={s.accordionBody}>
                      <Component
                        properties={form[1]?.properties}
                        onUpdate={onUpdate}
                        label={form[0]}
                        defaultValues={state?.data[form[0]] ?? {}}
                      />
                    </Accordion.Body>
                  </Accordion>
                );
              })}
          </ul>
          {/* <Button
            className={s.footerBackButton}
            variant="outline"
            color="secondary"
            onClick={() => props.goToStep && props.goToStep(0)}
          >
            <BsChevronLeft className={s.icon} />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default EditAnnouncement;
