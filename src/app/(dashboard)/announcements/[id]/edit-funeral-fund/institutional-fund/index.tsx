import React from "react";
import s from "./index.module.css";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import InstitutionalFundForm from "@dashboard-forms/funeral-fund/institutional-fund";
import { BiInstitutionalFund } from "@components/icons";
import { Button } from "@components/ui/dashboard";
import SectionOptions from "@components/section-options";
import cn from "classnames";
import { useCSR } from "@components/navigator";
import FuneralFundHeader from "@components/FuneralFundHeader";
import LivePreviewMini from "@features/dashboard/live-preview-mini";
import AnnouncementLayout from "@layouts/dashboard/announcement";
import { EditFuneralFund } from "../index";
// import { RiHomeHeartLine } from "react-icons/ri";
import { BiHomeHeart } from "react-icons/bi";

type Props = WizardChildRef & {};

const InstitutionalFund: React.FC<Props> = (props) => {
  const navigator = useCSR();
  const Icon = () => <BiHomeHeart className="text-[1.8rem]" />;
  return (
    <>
      <SectionOptions label="Funeral Fund" formType="funeral-fund" />
      <div className={s.root}>
        <div className="flex flex-row items-center justify-between my-4">
          {/* <div className="flex flex-row items-center justify-between my-4"> */}
          <FuneralFundHeader title="Charitable Fund" Icon={Icon} />
          {/* </div> */}
        </div>
        <div className={cn(s.content, "scrollbar")}>
          <InstitutionalFundForm />
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
InstitutionalFund.Layout = Layout;
export default InstitutionalFund;
