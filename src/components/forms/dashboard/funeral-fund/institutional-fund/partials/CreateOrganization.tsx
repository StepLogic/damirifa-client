import React, { useState } from "react";
import s from "./index.module.css";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
import { AiOutlinePlus } from "react-icons/ai";
// import { ModalChildRef } from "@components/modals/dashboard/edit-events";
import AddButton from "@components/AddButton";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

import { BiStreamLink } from "@components/icons";

type Props = {};
const CreateOrganization: React.FC<Props> = (props) => {
  const modal = useModalContext();
  const [showDropdown, toggleDropdown] = useState(false);
  const [newCharity, setNewCharity] = useState(false);
  return (
    <div
      className={
        "grid grid-col-1 gap-8 scrollbar max-h-[60vh] lg:min-w-[847px] pb-4 pt-3 overflow-x-hidden px-3 overflow-y-auto"
      }
    >
      {newCharity ? (
        <>
          <div className="flex flex-row items-center justify-between py-[10px] border-solid border-[0.5px] px-3 mb-3 border-x-[0] border-t-0 border-[#E7E7E7] ">
            <p className="text-[#585858] tracking-[ 0.0041em] text-[14px] leading-[140%] font-[500]">
              New Charity
            </p>
          </div>
          <Textfield color="secondary" placeholder="Name*" />
          <div className="flex flex-row items-center justify-end gap-[20px] ">
            <button
              onClick={() => {
                setNewCharity(false);
              }}
              className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
            >
              Cancel
            </button>
            <AddButton
              label="Add"
              onClick={() => {
                setNewCharity(false);
              }}
              // className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
            />
          </div>
        </>
      ) : (
        <>
          <Select
            placeholder={"Select or Add Charity"}
            required
            renderMenu={(props: any) => (
              <div className="flex flex-row items-center justify-between py-[10px] border-solid border-[0.5px] px-3 mb-3 border-x-[0] border-t-0 border-[#E7E7E7] ">
                <p className="text-[#585858] tracking-[ 0.0041em] text-[14px] leading-[140%] font-[500]">
                  Select Charity...
                </p>
                <button
                  onClick={() => {
                    props.setValue("");
                    setNewCharity(true);
                  }}
                  className="flex flex-row items-center gap-2 text-[#BA181B] text-[12px]"
                >
                  <AiOutlinePlus />
                  New Charity
                </button>
              </div>
            )}
          />
          <Textfield
            icon={<BiStreamLink />}
            color="secondary"
            type="tel"
            required
            placeholder="Paste Link"
          />
          <TextArea color="secondary" label="Additional Notes" />
          <AddButton
            label={"Add"}
            className={"mt-6 ml-auto"}
            onClick={() =>
              modal.openModal(<CreateOrganization />, "Add Organization")
            }
          />
        </>
      )}
    </div>
  );
};
export default CreateOrganization;
