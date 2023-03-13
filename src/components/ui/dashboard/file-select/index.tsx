"use client"
/**
 * Project: damirifa
 * File: TextField
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, { JSXElementConstructor, useState } from "react";
import s from "./index.module.css";
import { v4 as uuid } from "uuid";

// import LoadingDots from '../loading-dots'

export interface Props {
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
  required?: boolean;
  confirmed?: boolean;
  showTooltip?: boolean;
  onTooltipClick?: Function;
  error?: boolean;
  onChange?: Function;
}

//Just pass register as props and name to be used
// const patterns = {
//   tel: "^[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
//   email: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
//   password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})",
//   text: "^w",
//   currency: "^d",
// };
const FileSelect: React.FC<Props> = (props) => {
  const {
    className,
    variant = "outline",
    color = "primary",
    disabled = false,
    icon,
    error = false,
    placeholder,
    Component = "input",
    name = "default",
    disableCopyAndPaste = false,
    required = false,
    register,
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
      [s.error]: error,
      [s.iconContainer]: icon,
    },
    className
  );

  const [file, setFile] = useState<Object>();
  const [label, setLabel] = useState<string>(
    variant === "default" ? "Select File.." : ""
  );
  const id = uuid();

  const handleFileUpload = (param: any) => {
    setFile(param);
    setLabel(param.name);
  };
  return (
    <fieldset
      data-selected={`${typeof file !== "undefined"}`}
      className={cn(s.fieldset, rootClassName)}
    >
      {icon && <div className={s.icon}>{icon}</div>}
      <label className={s.fileInput}>
        <Component
          id={id}
          disabled={disabled}
          type={"file"}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            //@ts-ignore
            handleFileUpload(event.target?.files[0]);
          }}
        />
        {label}
      </label>
      {variant == "outline" && placeholder && (
        <>
          <legend id={"label"} tabIndex={-1} className={s.legend}>
            <span>{placeholder}</span>&nbsp;
            {required ? <span>*</span> : <></>}
          </legend>
          <label tabIndex={-1} htmlFor={id} className={s.label}>
            {/* {icon ? { icon } : <></>} */}
            <span>{placeholder}</span>&nbsp;
            {required ? <span>*</span> : <></>}
          </label>
        </>
      )}
    </fieldset>
  );
};

export default FileSelect;
