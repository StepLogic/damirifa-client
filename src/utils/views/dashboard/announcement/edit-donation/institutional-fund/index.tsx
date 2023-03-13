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

type Props = WizardChildRef & {};

const InstitutionalFund: React.FC<Props> = (props) => {
  const navigator = useCSR();
  return (
    <>
      <SectionOptions label="Funeral Fund" formType="funeral-fund" />
      <div className={s.root}>
        <div className="flex flex-row items-center justify-between my-4">
          {/* <div className="flex flex-row items-center justify-between my-4"> */}
          <FuneralFundHeader
            title="Charitable Fund"
            Icon={BiInstitutionalFund}
          />
          {/* </div> */}
        </div>
        <div className={cn(s.content, "scrollbar")}>
          <InstitutionalFundForm />
        </div>
      </div>
    </>
  );
};

export default InstitutionalFund;
