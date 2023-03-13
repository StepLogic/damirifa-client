import OptionsButton from "@components/OptionsButton";
import React from "react";

import s from "./index.module.css";

interface Props {}

const FamilyRecipient: React.FC<Props> = (props) => {
  return (
    <>
      <li className={s.root}>
        <div>
          <p className={s.label}>Frank Nsono</p>
          <OptionsButton />
        </div>
        <p className={s.secondaryLabel}>nsono@gmail.com</p>
        <div>
          <p className={s.secondaryLabel}>+233 20 333 3333</p>
          <div className={s.badge} data-status={"pending"}>
            Pending
          </div>
        </div>
      </li>
    </>
  );
};

export default FamilyRecipient;
