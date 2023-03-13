import React from "react";

export interface ContextInterface {
    collapse: Number;
    setCollapse: Function;
}

export const Context = React.createContext<ContextInterface>({
    collapse: 0,
    setCollapse: () => {
    },
});
