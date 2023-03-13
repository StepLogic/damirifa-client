import { WizardRef } from "@components/ui/dashboard/wizard";
import cn from "classnames";
import React, { useState } from "react";

import Header from "./common/header";
import SideBar from "./common/siderbar";
import { Context } from "./context";
import s from "./index.module.css";

interface Props {
  sideBarAlt?: boolean;
}

export enum MenuCollapse {
  EXPAND,
  MINIMIZE,
  COLLAPSE,
}

const DashboardLayout: React.FC<Props> = ({ children, sideBarAlt = false }) => {
  const [collapse, setCollapse] = useState<Number>(0);

  return (
    <Context.Provider
      value={{
        collapse: collapse,
        setCollapse: setCollapse,
      }}
    >
      <div data-theme={"dashboard"} className={cn(s.root)}>
        <div className={cn(s.container, "mx-auto")}>
          <Header className={s.header} />
          <main
            data-collapse={`${MenuCollapse.COLLAPSE}`}
            className={s.content}
          >
            <SideBar className={s.sidebar} sidebarAlt={sideBarAlt} />
            <div className="block 3xl:container flex-1 mt-[75px] overflow-y-auto scrollbar lg:mt-0 pt-8 px-4 lg:px-[3.125rem]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Context.Provider>
  );
};

export default DashboardLayout;
