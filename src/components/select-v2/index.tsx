/**
 *Project:damirifa
 *File:select-v2
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import { BsChevronDown } from "react-icons/bs";
type Props = {
  className?: string;
  Icon?: any;
  placeholder?: string;
};

const SelectV2 = (props: Props) => {
  const { className, icon, placeholder = "Newest" } = props;
  const Icon = icon;
  return (
    <fieldset className={cn(s.root, className)}>
      {Icon ? <Icon /> : <div />}
      <select>
        <option disabled selected>
          {placeholder}
        </option>
      </select>
      <BsChevronDown className={s.icon} />
    </fieldset>
  );
};

export default SelectV2;
