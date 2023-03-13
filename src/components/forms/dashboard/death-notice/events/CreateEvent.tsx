import AddButton from "@components/AddButton";
import {
  BiCalendarDate,
  BiDigitalAddress,
  BiDressCode,
  BiLocation,
  BiMaps,
  BiTime,
} from "@components/icons";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
import DatePicker from "@components/ui/dashboard/date-picker";
import cn from "classnames";
import React, { useState } from "react";

import s from "./index.module.css";
import { BiPlaceOption } from "../../../../icons";

type Props = {};
const CreateEvent: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "grid grid-cols-1 gap-8 max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar pr-3 py-4"
      }
    >
      <Select color="secondary" placeholder="Event Title" />
      <DatePicker
        color="secondary"
        icon={<BiCalendarDate />}
        placeholder="On (Select Date)"
      />
      <div className={"grid lg:grid-cols-2 lg:gap-3 gap-8"}>
        <Textfield
          color="secondary"
          placeholder="Starts At"
          icon={<BiTime />}
        />
        <Textfield color="secondary" icon={<BiTime />} placeholder="Ends At" />
      </div>

      <Textfield
        color="secondary"
        icon={<BiLocation />}
        placeholder="Place ( e.g. Hope Hall ) "
      />

      <Textfield
        color="secondary"
        icon={<BiPlaceOption />}
        placeholder="Physical Address"
      />
      <Textfield
        color="secondary"
        className={s.input}
        placeholder="Digital Address"
        icon={<BiDigitalAddress />}
      />
      <Textfield
        color="secondary"
        className={s.input}
        placeholder="Maps (Insert Link)"
        icon={<BiMaps />}
      />
      <Textfield
        color="secondary"
        placeholder="Dresscode"
        icon={<BiDressCode />}
      />
      <TextArea label={"Directions"} className={"!h-[6.3125rem]"} />

      <AddButton label="Add" className={cn("mt-2 ml-auto")} />
    </div>
  );
};
export default CreateEvent;
