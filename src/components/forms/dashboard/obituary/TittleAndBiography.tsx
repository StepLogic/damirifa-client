import { TipText } from "@components/TipText";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
import React from "react";

interface Props {}

const TitleAndBiography: React.FC<Props> = (props) => {
  return (
    <div className={"grid grid-cols-1 gap-[1.5rem] pb-10 mt-[25px]"}>
      <Select color="secondary" placeholder="Announcement Title" />
      <Select color="secondary" placeholder="Pronouncement" />
      <TextArea
        color="secondary"
        label="Deceased Biography"
        showWordCount={true}
        // className="!mt-0"
      />
      <div className="w-full flex flex-col gap-2 mt-10">
        {/* <p className="font-[600] text-[15px]">Inspirational Quote</p> */}
        <TextArea
          color="secondary"
          label="Inspirational Quote"
          showWordCount={true}
          className="!mt-0 !min-h-[102px]"
        />
        <TipText>
          Share something inspirational with well wishers. A thoughtful or
          solemn quote, a spiritual text or a favorite bible verse will fit
          nicely here.
        </TipText>
      </div>
    </div>
  );
};

export default TitleAndBiography;
