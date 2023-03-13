"use client"
/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, {
  InputHTMLAttributes,
  JSXElementConstructor,
  useEffect,
} from "react";
import s from "./index.module.css";

// import LoadingDots from '../loading-dots'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
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
  showWordCount?: Boolean;
}

//Just pass register as props and name to be used
const patterns = {
  tel: "^[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
  email: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
  password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})",
  text: "^w",
  currency: "^d",
};
const TextArea: React.FC<TextFieldProps> = (props) => {
  const {
    className,
    variant = "outline",
    color = "primary",
    disabled = false,
    style = {},
    label,
    Component = "textarea",
    name = "default",
    showWordCount = false,
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
      [s.secondary]: color === "secondary",
      [s.dark]: color === "dark",
      [s.outline]: variant === "outline",
      [s.disabled]: disabled,
      [s.tel]: type === "tel",
    },
    className
  );
  const labelClassName = cn(s.legend);
  let otherProps = { ...rest };
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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <fieldset
      className={rootClassName}
      data-word={showWordCount ? `${0}/${350}` : undefined}
    >
      <legend id={"label"} tabIndex={-1} className={labelClassName}>
        {label}&nbsp;{required ? <span>*</span> : <></>}
      </legend>
      <Component
        data-variant={variant}
        disabled={disabled}
        type={type}
        placeholder={" "}
        style={{
          ...style,
        }}
        {...otherProps}
      />
    </fieldset>
    //   {!!error && <p className={'help text-danger'}>{error?.message}</p>}
    // </HTMLDivElement>
  );
};

export default TextArea;
