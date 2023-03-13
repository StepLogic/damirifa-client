import { Button } from "@components/ui/dashboard";
import CheckBox from "@components/ui/dashboard/checkbox";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import React from "react";

import s from "./index.module.css";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import { useRouter } from "next/router";
import AnnouncementLayout from "@layouts/dashboard/announcement";
import cn from "classnames";

type Props = {
  handleAccepted: Function;
};

const TermsOfService: React.FC<Props> = (props) => {
  const { handleAccepted } = props;
  const router = useRouter();
  const terms = `
Only the widow(er), Parent or adult child of the deceased are eligible to receive funds donated. An eligible recipient must be selected to receive funds donated to the family.  

  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nStandard mobile money and bank fees apply.
  \nTo minimize fraud, we will require additional information to validate the relationship of funds recipients to the deceased. This could take up to 48 hours. The fund will display on your obituary page ONLY after validation is complete.
  `;
  return (
    <div className={cn(s.root, "scrollbar")}>
      <h2 className={s.heading}>Terms Of Service</h2>
      <div className={cn(s.paragraphContainer, "scrollbar")}>
        <p className={cn(s.paragraph, "scrollbar")}>{terms}</p>
      </div>
      <div className="flex flex-row items-center w-full gap-3">
        <CheckBox />
        <p className={s.declaration}>I agree to the Terms of Services.</p>
      </div>
      <div className="flex flex-row justify-end items-center gap-5 mt-[40px]">
        <Button
          variant="outline"
          color="secondary"
          className="!text-[#BA181B] !font-[500]"
          label={"Decline"}
          onClick={() => {
            router.back();
          }}
        />
        <Button
          label={"Accept"}
          onClick={() => {
            handleAccepted();
            // router.push("/dashboard/1/edit-announcement");
          }}
        />
      </div>
    </div>
  );
};
// TermsOfService.Layout = AnnouncementLayout;
export default TermsOfService;
