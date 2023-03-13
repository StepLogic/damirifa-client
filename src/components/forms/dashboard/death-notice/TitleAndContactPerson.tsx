import { TipText } from "@components/TipText";
import { Select, Switch, TextArea, Textfield } from "@components/ui/dashboard";
import React from "react";

interface Props {}

const TitleAndContactPerson: React.FC<Props> = (props) => {
  return (
    <div className={"grid grid-cols-1 gap-[1.5rem] pb-10 mt-[25px]"}>
      <Select color="secondary" placeholder="Announcement Title" />
      <div className="w-full flex flex-col gap-2 mt-10">
        {/* <p className="font-[600] text-[15px]">Inspirational Quote</p> */}
        <TextArea
          color="secondary"
          label="Comment"
          showWordCount={true}
          className="!mt-0 !min-h-[102px]"
        />
        <TipText>Share something a few comments.</TipText>
      </div>
      <p className={"text-[15px] font-[600] mt-6"}>
        Contact Person Information
      </p>
      <Textfield
        color="secondary"
        className={""}
        required
        placeholder="Full Name"
      />
      <Textfield
        color="secondary"
        className={""}
        required
        placeholder="Email"
      />
      <Textfield
        color="secondary"
        className={""}
        required
        placeholder="Phone number"
      />
      <label className={"flex flex-row m-2 gap-2"}>
        <Switch variant="inner-slider" />
        <p>WhatsApp same as Phone Number</p>
      </label>
      <Textfield
        color="secondary"
        className={""}
        placeholder="WhatsApp Number"
      />
    </div>
  );
};

export default TitleAndContactPerson;
