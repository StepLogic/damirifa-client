import React, { Fragment } from "react";

// import Dropzone from "@components/ui/dashboard/dropzone";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
// import DatePicker from "@components/ui/dashboard/date-picker";
import dynamic from "next/dynamic";
import { TipText } from "@components/TipText";

interface Props {}

const DatePicker = dynamic(
  () => import("@components/ui/dashboard/date-picker"),
  {
    suspense: true,
  }
);
const Dropzone = dynamic(() => import("@components/ui/dashboard/dropzone"), {
  suspense: true,
});
const DeceasedInformation: React.FC<Props> = (props) => {
  return (
    <div className={"grid grid-cols-1 gap-[1.5rem] pb-10 mt-[25px]"}>
      <div className="w-full">
        <Dropzone
          className="h-[136px]"
          renderParagraph={() => (
            <p className="text-[13px] text-center font-[Roboto] leading-[140%] tracking-[0.0041em]">
              Drop a banner image of the DECEASED here.
              <br /> Minimum Image Resolution:&nbsp;
              <b className={"text-[red] underline"}>1600 Pixels</b>
            </p>
          )}
          variant="icon"
        />
        <TipText className="mt-2">
          Select a&nbsp;
          <b className="font-[700]">high quality</b>&nbsp;image. Consider using
          a headshot or half body image with a plain background.
        </TipText>
      </div>
      <Select options={[]} placeholder="Prefix" />
      <Textfield
        color="secondary"
        className={"h-[3.5rem]"}
        placeholder="First Name"
        required
      />
      <Textfield
        color="secondary"
        className={"h-[3.5rem]"}
        placeholder="Middle Name"
      />
      <Textfield
        color="secondary"
        className={"h-[3.5rem]"}
        placeholder="Last Name"
      />
      <div className={"grid lg:grid-cols-2 gap-[1.5rem] lg:gap-3"}>
        <Select placeholder="Suffix" />
        <Textfield
          color="secondary"
          className={"h-[3.5rem]"}
          placeholder="Alias"
        />
      </div>
      <Textfield
        color="secondary"
        className={"h-[3.5rem]"}
        placeholder="Deceased Title/Notable Position Held"
      />
      <Textfield
        color="secondary"
        className={"h-[3.5rem]"}
        placeholder="Place of Birth"
      />
      <div className={"grid lg:grid-cols-2 gap-[1.5rem] lg:gap-3"}>
        <DatePicker placeholder="Date of Birth" required />
        <DatePicker placeholder="Date of Death" required />
      </div>
      <div className="w-full flex flex-col">
        <TextArea
          showWordCount={true}
          color="secondary"
          label="Deceased Quote"
          // className="mb-2,"
          className="!min-h-[102px] mb-2"
        />
        <TipText>
          Include a phrase your loved one was famous for or would like to be
          remembered by.
        </TipText>
      </div>
    </div>
  );
};

export default DeceasedInformation;
