import { WizardRef } from "@components/ui/dashboard/wizard";
import cn from "classnames";
import React, { createContext, useRef, useState } from "react";

import Header from "./common/header";
import SideBar from "./common/siderbar";
import { Context } from "./context";
import s from "./index.module.css";

interface Props {
  navigateTo?: Function;
}

export enum ActiveMenuEnum {
  DASHBOARD,
  ANNOUNCEMENT,
  CONDOLENCES,
  ANALYTICS,
}

export enum SubViewsEnum {
  ANNOUNCEMENT,
  CONDOLENCES,
  ANALYTICS,
}

export enum MenuCollapse {
  EXPAND,
  MINIMIZE,
  COLLAPSE,
}

export interface NavigationInterface {
  activeMenuItem?: ActiveMenuEnum;
  activeView?: SubViewsEnum;
}

const NavigationContext = createContext<NavigationInterface>({
  activeMenuItem: ActiveMenuEnum.ANNOUNCEMENT,
  activeView: SubViewsEnum.ANNOUNCEMENT,
});

const DashboardLayout: React.FC<Props> = ({ children, navigateTo }) => {
  const ref = useRef<WizardRef>(null);
  const [collapse, setCollapse] = useState<Number>(0);
  const next = () => {
    ref.current && ref.current.nextStep();
  };
  const previous = () => {
    ref.current?.previousStep();
  };
  const goToStep = (value: number) => {
    ref.current?.goToStep(value);
  };
  const goToNamedStep = (value: string) => {
    ref.current?.goToNamedStep(value);
  };
  const goBack = () => {
    ref.current?.goBack && ref.current?.goBack();
  };
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
            <SideBar className={s.sidebar} navigateTo={navigateTo} />
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
