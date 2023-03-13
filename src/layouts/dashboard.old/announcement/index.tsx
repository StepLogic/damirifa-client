import React, { createContext, useRef } from "react";
import s from "./index.module.css";
import cn from "classnames";
import Header from "./common/header";
import { WizardRef } from "@components/ui/dashboard/wizard";

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

const AnnouncementLayout: React.FC<Props> = ({ children, navigateTo }) => {
  const ref = useRef<WizardRef>(null);

  return (
    <div data-theme={"dashboard"} className={cn(s.root)}>
      <div className={cn(s.container)}>
        <Header className={s.header} />
        <main className={cn(s.content, "")}>{children}</main>
      </div>
    </div>
  );
};

export default AnnouncementLayout;
