import { Button } from "@components/ui/dashboard";
import CheckBox from "@components/ui/dashboard/checkbox";
import { WizardChildRef } from "@components/ui/dashboard/wizard";
import React from "react";

import s from "./index.module.css";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";

type Props = WizardChildRef & {};

const AnnouncementTermsOfService: React.FC<Props> = (props) => {
  const { goToNamedStep, goToStep } = props;
  const navigate = useCSR();
  const terms = `
Only the widow(er), Parent or adult child of the deceased are eligible to receive funds donated. An eligible recipient must be selected to receive funds donated to the family.  

  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nStandard mobile money and bank fees apply.
  \nTo minimize fraud, we will require additional information to validate the relationship of funds recipients to the deceased. This could take up to 48 hours. The fund will display on your obituary page ONLY after validation is complete.
  `;
  return (
    <div className={s.root}>
      <h2 className={s.heading}>Terms Of Service</h2>
      <div className={s.paragraphContainer}>
        <p className={s.paragraph}>{terms}</p>
      </div>
      <div className="flex flex-row items-center w-full gap-3">
        <CheckBox />
        <p className={s.declaration}>
          By selecting this box, you agree to the Terms of Services.
        </p>
      </div>
      <div className="flex flex-row justify-end items-center gap-5 mt-[50px]">
        <Button
          variant="outline"
          color="secondary"
          className="!text-[#BA181B] !font-[500]"
          label={"Decline"}
          onClick={() => {
            navigate.goBack();
          }}
        />
        <Button
          label={"Accept"}
          onClick={() => {
            navigate.setRoute(ViewTree.EDIT_ANNOUNCEMENT);
          }}
        />
      </div>
    </div>
  );
};

export default AnnouncementTermsOfService;
