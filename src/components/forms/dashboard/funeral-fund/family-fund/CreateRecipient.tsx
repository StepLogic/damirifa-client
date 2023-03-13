import AddButton from "@components/AddButton";
import { BiDashboardCreate, BiStreamLink } from "@components/icons";
import {
  Button,
  FileSelect,
  Select,
  Switch,
  TextArea,
  Textfield,
} from "@components/ui/dashboard";
import PhoneInput from "@components/ui/dashboard/phone-input";

import { uuid } from "@lib/Utils";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiAddProgram } from "../../../../icons";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

type Props = {};

function AddFamily(props: any) {
  const modal = useModalContext();
  return (
    <div className="grid grid-cols-1 gap-4 auto-rows-min">
      <div className="flex flex-row items-center justify-between py-[10px] border-solid border-[0.5px] px-3 mb-3 border-x-[0] border-t-0 border-[#E7E7E7] ">
        <p className="text-[#585858] tracking-[ 0.0041em] text-[14px] leading-[140%] font-[500]">
          New Relative
        </p>
      </div>
      <Textfield
        color="secondary"
        required
        placeholder="Name (comma separated)"
      />
      <Select required placeholder={"Eligible Relation"} />
      <div className="flex flex-row items-center justify-end gap-[20px] ">
        <button
          onClick={() => {
            modal.openModal(<CreateRecipient />, "Add Recipient", false);
          }}
          className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
        >
          Cancel
        </button>
        <AddButton
          color="secondary"
          label="Add"
          onClick={() =>
            modal.openModal(<CreateRecipient />, "Add Recipient", false)
          }
        />
      </div>
    </div>
  );
}

const CreateRecipient: React.FC<Props> = (props) => {
  const modal = useModalContext();
  const [showQRField, setShowQRField] = useState(false);
  const [isDomestic, setIsDomestic] = useState(true);
  const [newFamily, setFamily] = useState(true);
  const handleAccountSelection = () => {
    setIsDomestic((r) => !r);
  };
  const options: Array<{ value: string; label: any; relation: string }> = [
    { value: "Mariama Makiba", label: "Mariama Makiba", relation: "father" },
    { value: "Willson Makiba", label: "Willson Makiba", relation: "mother" },
  ];
  const modOptions = options.map((option) => {
    option.label = (
      <div
        key={uuid()}
        // onClick={() => props.setValue(option)}
        className=" flex-col my-4 flex hover:[#ededed] text-[14px] text-[#585858]"
      >
        {option.value}
        <div className="flex items-center !h-[20px] font-[500] leading-[12px] text-[10px] text-[#047E7A] max-w-[51px]  bg-[#E9F8FF] rounded-[100px] justify-center">
          {option.relation}
        </div>
      </div>
    );
    return { value: option.value, label: option.label };
  });

  return (
    <div
      className={
        "grid grid-col-1 gap-8 scrollbar max-h-[60vh] lg:min-w-[847px] pb-4 pt-3 overflow-x-hidden px-3 overflow-y-auto"
      }
    >
      <>
        <Select
          options={modOptions}
          placeholder={"Recipient"}
          renderMenu={(props: any) => (
            <div className="gap-4">
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between py-[10px] border-solid border-[0.5px] px-3 mb-3 border-x-[0] border-t-0 border-[#E7E7E7] ">
                <p className="text-[#585858] hidden lg:block tracking-[ 0.0041em] text-[14px] leading-[140%] font-[500]">
                  Select Relative...
                </p>
                <button
                  onClick={() => {
                    modal.openModal(<AddFamily />, "", true);
                  }}
                  className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
                >
                  <AiOutlinePlus />
                  New Relative
                </button>
              </div>
            </div>
          )}
        />
        <Select
          required
          options={modOptions}
          placeholder={"Family Representative"}
          renderMenu={(props: any) => (
            <div className="gap-4">
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between py-[10px] border-solid border-[0.5px] px-3 mb-3 border-x-[0] border-t-0 border-[#E7E7E7] ">
                <p className="text-[#585858] hidden lg:block tracking-[ 0.0041em] text-[14px] leading-[140%] font-[500]">
                  Select Relative...
                </p>
                <button
                  onClick={() => modal.openModal(<AddFamily />, "", true)}
                  className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
                >
                  <AiOutlinePlus />
                  New Relative
                </button>
              </div>
            </div>
          )}
        />
        <Select
          onChange={() => handleAccountSelection()}
          required
          placeholder={"Account Location"}
        />

        {isDomestic ? (
          <>
            <div>
              <p className="fieldLabel">Account Information</p>
              <p className="text-[12px] font-semibold opacity-50">
                Your account information is stored securely and hidden from the
                public
              </p>
            </div>
            <Select placeholder={"Account Provider*"} />
            <div className="grid lg:grid-cols-2 gap-4">
              <Textfield
                color="secondary"
                required
                placeholder="Account Number"
              />
              <Textfield color="secondary" placeholder="Email" />
            </div>
            <div className="flex flex-row items-center gap-1">
              <Switch
                variant="outer-slider"
                color="secondary"
                onChange={(value: boolean) => setShowQRField(value)}
              />
              <p className={"text-[#666666]"}>Account QR code</p>
            </div>
            {showQRField && (
              <FileSelect
                color="secondary"
                placeholder="QR Code"
                icon={<BiAddProgram />}
              />
            )}
            <div className="grid lg:grid-cols-2 gap-4">
              <Textfield color="secondary" placeholder="Home Location" />
              <Textfield color="secondary" placeholder="Digital Address" />
            </div>
          </>
        ) : (
          <>
            <p className="fieldLabel">Payment Information</p>
            <Select
              // onChange={handleSelection}
              placeholder={"Payment Service"}
            />
            <Textfield
              color="secondary"
              type="text"
              icon={<BiStreamLink />}
              placeholder="Paste Link"
            />
            <div className="flex flex-row items-center gap-1">
              <Switch
                variant="outer-slider"
                color="secondary"
                onChange={(value: boolean) => setShowQRField(value)}
              />
              <p className={"text-[#66666]"}>Account QR code</p>
            </div>
            {showQRField && (
              <FileSelect
                color="secondary"
                placeholder="QR Code"
                icon={<BiAddProgram />}
              />
            )}
            <TextArea
              variant="outline"
              className="!h-[78px]"
              label="Instructions"
            />

            <div className="grid lg:grid-cols-2 gap-4">
              <Textfield color="secondary" placeholder="Email" />

              <PhoneInput />
            </div>
          </>
        )}
        <AddButton
          label={"Add"}
          className={"ml-auto"}
          onClick={() => modal.closeModal()}
        />
      </>
    </div>
  );
};
export default CreateRecipient;
