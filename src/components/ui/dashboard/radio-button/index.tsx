/**
 *Project:Traceability Platform
 *File:radio
 *Created by KojoGyaase
 *Copyright Bentil
 **/
import React, { InputHTMLAttributes, ReactHTMLElement } from "react";
import s from "./index.module.css";
import cn from "classnames";

type Props = { className?: string } & InputHTMLAttributes<HTMLInputElement>;

const RadioButton: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <label className={cn(className, s.root)}>
      <input {...rest} type={"checkbox"} className={s.input} />
      <div />
    </label>
  );
};

export default RadioButton;
