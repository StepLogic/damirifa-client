import { BiDashboardCreate } from "@components/icons";
import OptionsButton from "@components/OptionsButton";
import React from "react";

import s from "./index.module.css";

interface Props {}

const OrganizationItem: React.FC<Props> = (props) => {
  return (
    <>
      <li className={s.root}>
        <div className={s.header}>
          <div className={s.top}>
            <p className={s.label}>Osu Children Home</p>
            <OptionsButton />
          </div>
          <div className={s.badge} data-status={"pending"}>
            Pending
          </div>
        </div>
        {/* <div className={s.body}>
          <BiDashboardCreate />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            feugiat semper facilisis dis egestas interdum lectus ultrices massa.
            Dignissim sit hendrerit iaculis arcu non dictum rhoncus elementum.
          </p>
        </div> */}
        {/* <div className={s.footer}>
          <p className={s.label}>Official website</p>
          <p className={s.pill}> www.och-site.extension</p>
        </div> */}
      </li>
    </>
  );
};

export default OrganizationItem;
