import DeceasedInformation from "@dashboard-forms/obituary/DeceasedInformation";
import Events from "@dashboard-forms/obituary/events";
import Family from "@dashboard-forms/obituary/Family";
import Media from "@dashboard-forms/obituary/media";
import TitleAndBiography from "@dashboard-forms/obituary/TittleAndBiography";
import Tributes from "@dashboard-forms/obituary/tributes";
import {
  BiAnnouncement,
  BiAnnouncementCreate,
  BiEvents,
  BiExpand,
  BiExternalLink,
  BiFamily,
  BiMedia,
  BiTribute,
} from "@components/icons";
import { useCSR } from "@components/navigator";
import SectionOptions from "@components/section-options";
import { Button, RadialProgress } from "@components/ui/dashboard";
import Accordion from "@components/ui/dashboard/accordion";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import LivePreviewMini from "@features/dashboard/live-preview-mini";
import React, { Component, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { v4 as uuid } from "uuid";

import s from "./index.module.css";

type Props = {};

const LivePreview: React.FC<Props> = (props) => {
  const navigator = useCSR();
  return (
    <div className={s.root}>
      <div className={s.toolbar}>
        <p className={s.label}>Preview</p>
        <div className={s.icons}>
          <Button variant="icon">
            <BiExternalLink color={"#BA181B75"} />
          </Button>
          <Button
            variant="icon"
            onClick={() => {
              navigator.goBack();
            }}
          >
            <BiExpand color={"#BA181B"} />
          </Button>
        </div>
      </div>
      {/* <div> */}
      <iframe
        src={"/obituary/1"}
        className={s.frame}
        frameBorder="0"
        width="100%"
        height="950"
      />
    </div>
  );
};

export default LivePreview;
