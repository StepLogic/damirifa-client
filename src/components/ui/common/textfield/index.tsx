/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, {InputHTMLAttributes, JSXElementConstructor, useState,} from "react";
import {AiOutlineArrowRight, AiOutlineCheck, AiOutlineEye, AiOutlineEyeInvisible,} from "react-icons/ai";
import s from "./index.module.css";

// import LoadingDots from '../loading-dots'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    variant?: "primary" | "secondary";
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
    error?: string;
}

//Just pass register as props and name to be used
const patterns = {
    tel: "^[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
    email: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})",
    text: "^w",
    currency: "^d",
};
const TextField: React.FC<TextFieldProps> = (props) => {
    const {
        className,
        variant = "primary",
        disabled = false,
        error,
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

    const rootClassName = cn(
        s.root,
        {
            [s.primary]: variant === "primary",
            [s.secondary]: variant === "secondary",
            [s.disabled]: disabled,
            [s.tel]: type === "tel",
            [s.error]: error,
        },
        className
    );
    const labelClassName = cn(s.label, {
        [s.primary]: variant === "primary",
        [s.secondary]: variant === "secondary",
        [s.disabled]: disabled,
    });
    let otherProps = {...rest};
    //  update props with null copy and paste functions
    if (disableCopyAndPaste) {
        otherProps = {
            onCopy: (e: any) => {
                e.preventDefault();
                return false;
            },
            onPaste: (e: any) => {
                e.preventDefault();
                return false;
            },
            ...rest,
        };
    }

    // update props for integration
    if (register) {
        const shallowCopy = otherProps;
        otherProps = {
            ...shallowCopy,
            ...register(name, {
                required: required,
                pattern: patterns[type || "text"],
            }),
        };
    }

    const [showPassword, togglePassword] = useState(false);
    return (
        <>
            {label ? (
                <label className={labelClassName}>
                    {label}&nbsp;{required ? <span>*</span> : <></>}&nbsp;&nbsp;
                    {error && <span className="text-red">{error}</span>}
                </label>
            ) : (
                <></>
            )}

            {type === "tel" ? (
                <div
                    className={rootClassName}
                    // ref={divRef}
                    // onFocus={() => {
                    //   focusInput()
                    // }}
                >
                    <div className={s.phoneCode}>
                        <svg width="14" height="12">
                            <image
                                width="14"
                                height="12"
                                xlinkHref="/assets/logo/ghana.png"
                            ></image>
                        </svg>
                        <span>+(233)</span>
                    </div>
                    <Component
                        data-variant={variant}
                        disabled={disabled}
                        name={name}
                        type={type}
                        style={{
                            ...style,
                        }}
                        {...otherProps}
                    />
                    {showTooltip ? (
                        <div className={s.tooltipContainer}>
                            {confirmed ? (
                                <AiOutlineCheck/>
                            ) : (
                                <AiOutlineArrowRight
                                    onClick={() => onTooltipClick && onTooltipClick()}
                                />
                            )}
                            <div className={cn(s.tooltip)}>Send OTP</div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <>
                    {type == "password" ? (
                        <div className="flex flex-row relative w-full">
                            <Component
                                data-variant={variant}
                                className={rootClassName}
                                disabled={disabled}
                                name={name}
                                autocomplete="off"
                                type={showPassword ? "text" : type}
                                style={{
                                    ...style,
                                }}
                                {...otherProps}
                            />
                            {showPassword ? (
                                <AiOutlineEyeInvisible
                                    onClick={() => togglePassword(false)}
                                    className={s.showPassword}
                                />
                            ) : (
                                <AiOutlineEye
                                    onClick={() => togglePassword(true)}
                                    className={s.showPassword}
                                />
                            )}
                        </div>
                    ) : (
                        <>
                            <Component
                                data-variant={variant}
                                className={rootClassName}
                                disabled={disabled}
                                name={name}
                                type={type}
                                style={{
                                    ...style,
                                }}
                                {...otherProps}
                            />
                        </>
                    )}
                </>
            )}
        </>
        //   {!!error && <p className={'help text-danger'}>{error?.message}</p>}
        // </HTMLDivElement>
    );
};

export default TextField;
