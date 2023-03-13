import { WizardChildRef } from "@components/ui/dashboard/wizard";
import AnnouncementLayout from "@layouts/dashboard.old/announcement";
import React from "react";

import EditAnnouncement from "./edit-announcement";
import EditFuneralFund from "./edit-donation";
import AnnouncementView from "./index";

type Props = WizardChildRef & {};
const AnnouncementView: React.FC<Props> = (props) => {
  const { goToStep } = props;
  const navigateTo = () => {
    console.log(props);
    goToStep && goToStep(0);
  };
  return (
    <AnnouncementLayout navigateTo={navigateTo}>
      <AnnouncementView name={"landing"} />
      <EditAnnouncement name={"announcement"} />
      <EditFuneralFund name="funeral-fund" />
    </AnnouncementLayout>
  );
};

export default AnnouncementView;
