import React from "react";
import s from "./index.module.css";
import DashboardLayout from "@layouts/dashboard.old/dashboard";
import { WizardChildRef } from "@components/ui/dashboard/wizard";

type Props = WizardChildRef & {};

const Landing: React.FC<Props> = (props) => {
  const { goToNamedStep } = props;
  return (
    <DashboardLayout navigateTo={goToNamedStep}>
      <div className={s.root} />
    </DashboardLayout>
  );
};

export default Landing;
