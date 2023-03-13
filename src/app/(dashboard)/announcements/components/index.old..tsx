import React, {createContext, useRef} from "react";
import s from "./index.module.css";
import cn from "classnames";
import Header from "./common/header";
import {Context} from "./context";
import Wizard, {WizardRef} from "@components/ui/dashboard/wizard";

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

const DashboardLayout: React.FC<Props> = ({children, navigateTo}) => {
    const ref = useRef<WizardRef>(null);
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
        return ref.current?.goBack && ref.current?.goBack();
    };
    const goHome = () => {
        console.log("announcement.components.gohome", "here", navigateTo);
        navigateTo && navigateTo("landing");
    };
    return (
        <Context.Provider
            value={{
                nextStep: next,
                previousStep: previous,
                goToNamedStep: goToNamedStep,
                goToStep: goToStep,
                goBack: goBack,
            }}
        >
            <div data-theme={"dashboard"} className={cn(s.root)}>
                <div className={cn(s.container)}>
                    <Header className={s.header} goToHome={() => goHome()}/>
                    <main className={cn(s.content, "3xl:container")}>
                        <Wizard id={"announcement_wizard"} ref={ref}>
                            {children}
                        </Wizard>
                    </main>
                </div>
            </div>
        </Context.Provider>
    );
};

export default DashboardLayout;
