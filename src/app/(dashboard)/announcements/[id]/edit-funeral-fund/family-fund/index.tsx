import React from "react";
import s from "./index.module.css";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import FamilyFundForm from "@dashboard-forms/funeral-fund/family-fund";
import { BiFamilyFund } from "@components/icons";
import { Button } from "@components/ui/dashboard";
import SectionOptions from "@components/section-options";
import cn from "classnames";
import { useCSR } from "@components/navigator";
import FuneralFundHeader from "@components/FuneralFundHeader";
import LivePreviewMini from "@features/dashboard/live-preview-mini";
import AnnouncementLayout from "@layouts/dashboard/announcement";
import { EditFuneralFund } from "../page";

type Props = WizardChildRef & {};

const FamilyFund: React.FC<Props> = (props) => {
  const { goToNamedStep, goToStep } = props;
  const navigator = useCSR();
  return (
    <>
      <SectionOptions label="Funeral Fund" formType="funeral-fund" />
      <div className={s.root}>
        <div className="flex flex-row items-center justify-between my-4">
          <FuneralFundHeader title="Family Fund" Icon={BiFamilyFund} />
        </div>
        <div className={cn(s.content, "scrollbar")}>
          <FamilyFundForm />
        </div>
      </div>
    </>
  );
};
const Layout = ({ children }) => (
  <AnnouncementLayout>
    <EditFuneralFund>{children}</EditFuneralFund>
  </AnnouncementLayout>
);
FamilyFund.Layout = Layout;
export default FamilyFund;
