import AddButton from "@components/AddButton";
import { BiCalendarDate, BiStreamLink, BiTime } from "@components/icons";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
import DatePicker from "@components/ui/dashboard/date-picker";
import TimePicker from "@components/ui/dashboard/time-picker";
import cn from "classnames";
import React from "react";

import s from "./index.module.css";

type Props = {};
const CreateLiveStream: React.FC<Props> = (props) => {
  return (
    <div
      className={
        "grid grid-cols-1 gap-8 max-h-[70vh] overflow-y-auto  overflow-x-hidden scrollbar pr-3 py-4"
      }
    >
      <Textfield color="secondary" placeholder="Event Title" />
      <DatePicker
        color="secondary"
        icon={<BiCalendarDate />}
        placeholder="Date"
        required
      />
      <TimePicker
        color="secondary"
        placeholder="Time"
        required
        icon={<BiTime />}
      />
      {/* <Textfield color="secondary" icon={<BiTime />} placeholder="Ends At" /> */}
      <Select color="secondary" placeholder="Platform" />
      <Textfield
        color="secondary"
        className={s.input}
        placeholder="Paste link"
        icon={<BiStreamLink />}
      />
      <TextArea
        showWordCount={true}
        color="secondary"
        label="Additional Information"
        className=""
      />
      <AddButton label="Add" className={cn("mt-8 ml-auto")} />
    </div>
  );
};
export default CreateLiveStream;
