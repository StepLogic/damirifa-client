/**
 *Project:damirifa
 *File:funeral-form
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import { FileSelect, TextArea, Textfield } from "@components/ui/dashboard";
import { BiAddProgram } from "@components/icons";
import PhoneInput from "@components/ui/dashboard/phone-input";
type Props = {
  className?: string;
};

const FuneralForm = (props: Props) => {
  return (
    <div className="grid grid-cols-1">
      <div className={s.descriptionField}>
        <Textfield color="secondary" placeholder="Title" />
        <TextArea
          color="secondary"
          className={s.textArea}
          label="Introduction"
          showWordCount={true}
        />
      </div>
      <div className={s.detailsField}>
        <div>
          <p className={cn(s.label, "mb-1")}> Mortuary or Funeral Home</p>
        </div>

        <Textfield color="secondary" className={s.input} placeholder="Name" />
        <Textfield
          color="secondary"
          className={s.input}
          placeholder="Location"
        />
        <Textfield
          color="secondary"
          className={s.input}
          type="tel"
          placeholder="Phone"
        />

        <p className={cn(s.label, "my-1")}>Proof of Death</p>

        <FileSelect
          className={s.input}
          icon={<BiAddProgram />}
          color="secondary"
          placeholder="(e.g. Death Certificate)"
        />
        <p className={cn(s.label, "my-1")}>
          Family Contact with Mortuary or Funeral Home
        </p>
        <Textfield
          color="secondary"
          className={s.input} // type="tel"
          placeholder="Name"
        />
        <PhoneInput />
      </div>
    </div>
  );
};

export default FuneralForm;
