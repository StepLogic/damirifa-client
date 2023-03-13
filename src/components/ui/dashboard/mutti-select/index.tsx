/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, {HTMLAttributes, JSXElementConstructor, useEffect,} from "react";

// import LoadingDots from '../loading-dots'

export interface MultiSelectProps extends HTMLAttributes<HTMLSelectElement> {
    className?: string;
    color?: "primary" | "secondary" | "dark";
    variant?: "outline";
    Component?: string | JSXElementConstructor<any>;
    disabled?: boolean;
    name?: string;
    disableCopyAndPaste?: boolean;
    register?: any;
    type?: "email" | "text" | "tel" | "currency" | "password";
    label?: String;
    required?: boolean;
    confirmed?: boolean;
    showTooltip?: boolean;
    onTooltipClick?: Function;
}

//Just pass register as props and name to be used

const MultiSelect: React.FC<MultiSelectProps> = (props) => {
    const {
        className,
        variant = "outline",
        color = "primary",
        disabled = false,
        style = {},
        label,
        Component = "input",
        name = "default",
        disableCopyAndPaste = false,
        required = false,
        register,
        type,
        confirmed,
        showTooltip = false,
        onTooltipClick,
        ...rest
    } = props;

    const rootClassName = cn();

    // update props for integration

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <select className={rootClassName}></select>
        //   {!!error && <p className={'help text-danger'}>{error?.message}</p>}
        // </HTMLDivElement>
    );
};

export default MultiSelect;
