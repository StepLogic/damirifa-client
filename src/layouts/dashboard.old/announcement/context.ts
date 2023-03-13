import React from "react";

export interface ContextInterface {
    nextStep: Function;
    previousStep: Function;
    goToStep: Function;
    goToNamedStep: Function;
    goBack: Function;
}

export const Context = React.createContext<ContextInterface>({
    nextStep: () => {
    },
    previousStep: () => {
    },
    goToStep: () => {
    },
    goToNamedStep: () => {
    },
    goBack: () => {
    },
});
