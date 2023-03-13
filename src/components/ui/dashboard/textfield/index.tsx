"use client"
/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */
import cn from "classnames";
import React, {
  InputHTMLAttributes,
  JSXElementConstructor,
  useEffect,
} from "react";

import s from "./index.module.css";

// import styled, { css } from 'styled-components'
// import LoadingDots from '../loading-dots'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  color?: "primary" | "secondary" | "dark";
  variant?: "outline" | "default";
  Component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
  name?: string;
  icon?: React.ReactNode;
  disableCopyAndPaste?: boolean;
  register?: any;
  placeholder?: string;
  type?: "email" | "text" | "tel" | "currency" | "password";
  label?: String;
  required?: boolean;
  confirmed?: boolean;
  showTooltip?: boolean;
  onTooltipClick?: Function;
  error?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    className,
    variant = "outline",
    color = "secondary",
    disabled = false,
    error = false,
    placeholder,
    style = {},
    icon,
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
      [s.secondary]: color === "secondary",
      [s.dark]: color === "dark",
      [s.outline]: variant === "outline",
      [s.default]: variant === "default",
      [s.disabled]: disabled,
      [s.tel]: type === "tel",
      [s.error]: error,
      [s.iconContainer]: icon,
    },
    className
  );
  const labelClassName = cn(s.label);
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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <fieldset className={cn(s.fieldset, rootClassName)}>
      {icon && <div className={cn(s.icon)}>{icon}</div>}
      <Component
        data-variant={variant}
        disabled={disabled}
        type={type}
        placeholder={variant == "outline" ? " " : placeholder}
        className={s.input}
        style={{
          ...style,
        }}
        pattern="/^$|\s+/"
        {...otherProps}
      />
      {variant == "outline" && placeholder ? (
        <label tabIndex={-1} className={cn(s.label)}>
          <span>{placeholder}</span>
          {required ? <span>*</span> : <></>}
        </label>
      ) : (
        ""
      )}
      {variant == "outline" && placeholder ? (
        <legend id={"label"} tabIndex={-1} className={s.legend}>
          <span>{placeholder}</span>&nbsp;{required ? <span>*</span> : <></>}
        </legend>
      ) : (
        <></>
      )}
    </fieldset>
  );
};

export default TextField;
