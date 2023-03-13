import DeceasedInformation from "@components/forms/dashboard/obituary/DeceasedInformation";
import Events from "@components/forms/dashboard/obituary/events";
import Family from "@components/forms/dashboard/obituary/Family";
import Media from "@components/forms/dashboard/obituary/media";
import TitleAndBiography from "@components/forms/dashboard/obituary/TittleAndBiography";
import Tributes from "@components/forms/dashboard/obituary/tributes";
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
import React, { Component, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import cn from "classnames";

import s from "./index.module.css";

type Props = WizardChildRef & {};

export const formFields: Array<{
  label: string;
  description: string;
  icon: React.ComponentType;
  component: React.ComponentType;
}> = [
  {
    label: "Deceased Information",
    description: "Add or Update Deceased Information",
    icon: BiAnnouncementCreate,
    component: DeceasedInformation,
  },
  {
    label: "Title and Biography",
    description: "Add or Update Announcement and Biography Information",
    icon: BiAnnouncement,
    component: TitleAndBiography,
  },
  {
    label: "Family",
    description:
      "Add or Update Family, Chief Mourners and Contact Person Information",
    icon: BiFamily,
    component: Family,
  },
  {
    label: "Media",
    description: "Add or Update Photos, Video and Audio",
    icon: BiMedia,
    component: Media,
  },
  {
    label: "Events",
    description: "Add or update Events and Program Information",
    icon: BiEvents,
    component: Events,
  },
  {
    label: "Tributes",
    description: "Add or Update Tributes",
    icon: BiTribute,
    component: Tributes,
  },
];

const EditAnnouncement: React.FC<Props> = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className={s.root}>
      <LivePreviewMini />
      <div className={s.fieldList}>
        <SectionOptions label="Edit Announcement" formType="announcement" />
        <div className={s.formSections}>
          <Button
            size="sm100"
            variant="outline"
            color="dark"
            label={expand ? "Collapse All" : "Expand All"}
            className={s.expandButton}
            onClick={() => setExpand((current) => !current)}
          />

          <ul className={cn(s.list, "scrollbar")}>
            {formFields.map((form) => {
              const Icon = form.icon as React.ComponentType<{
                className?: string;
              }>;
              const Component = form.component;
              return (
                <Accordion expand={expand} key={uuid()} className={s.accordion}>
                  <Accordion.Header className={s.item}>
                    <div className="flex flex-row items-center gap-2">
                      <RadialProgress className={s.iconContainer}>
                        <Icon className={s.icon} />
                      </RadialProgress>
                      <div className="flex flex-col gap-[5px]">
                        <h5>{form.label}</h5>
                        <p>{form.description}</p>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className={s.accordionBody}>
                    <Component />
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
