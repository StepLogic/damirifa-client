import React from "react";

import cn from "classnames";
import {
  Button,
  MultiInputList,
  Switch,
  TextArea,
  Textfield,
} from "@components/ui/dashboard";
import { ListingArea } from "@components/ui/dashboard/multi-input-list";
import { useModalContext } from "@contexts/ModalContext";
import { Relatives } from "../../../ui/dashboard/multi-input-list";
import { TipText } from "../../../TipText";

interface Props {}

const Family: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <div className={"grid grid-cols-1 gap-[1.5rem] pb-10 mt-[25px]"}>
      <p className={"text-[15px] font-[600]"}>Family Information</p>
      <div className="w-full grid grid-cols-1">
        <MultiInputList
          className=" hidden lg:block w-full"
          selectOptions={["test", "test", "test", "test", "test"]}
          inputLabel={"Relative (comma separated)"}
          selectLabel={"Relation"}
          listLabel={"Family members (add above)"}
          searchPlaceholder={"Search relations..."}
        />
        <TipText className="mt-2 hidden lg:block">
          Use commas to add multiple names with the same relation
        </TipText>
        <ListingArea
          listLabel={"Family members "}
          onAddButtonClick={() =>
            modal.openModal(<Relatives />, "Add Relatives")
          }
        />
      </div>
      {/* <p className={"text-[15px] font-[600]"}> Chief Mourners</p> */}
      <div className="w-full flex flex-col ">
        <TextArea
          className="!mt-0 mb-2"
          color="secondary"
          placeholder=""
          label="Add Chief Mourners"
        />
        <TipText className="mb-2">Use a comma to separate names</TipText>
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

export default Family;
