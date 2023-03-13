/**
 *Project:damirifa
 *File:phone-input
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
type Props = {
  className?: string;
};

import "react-phone-input-2/lib/material.css";
import BasePhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
const PhoneInput = (props: Props) => {
  const { className } = props;
  return (
    <fieldset className={cn(s.root, className)}>
      <legend>Phone</legend>
      <BasePhoneInput
        country={"gh"}
        // value={this.state.phone}
        // onChange={(phone) => this.setState({ phone })}
      />
    </fieldset>
  );
};

export default PhoneInput;
