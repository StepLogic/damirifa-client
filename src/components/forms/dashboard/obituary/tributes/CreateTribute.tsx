import AddButton from "@components/AddButton";
import cn from "classnames";
import {
  Button,
  Select,
  Switch,
  TextArea,
  Textfield,
} from "@components/ui/dashboard";
import React from "react";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

function SVG() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 120 124"
      fill="none"
      className="text-[8rem]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="60" fill="#D9D9D9" />
      <path
        d="M61.4633 47.5608C61.4633 46.9787 61.232 46.4203 60.8203 46.0087C60.4087 45.597 59.8503 45.3657 59.2682 45.3657C58.686 45.3657 58.1276 45.597 57.716 46.0087C57.3043 46.4203 57.073 46.9787 57.073 47.5608V57.073H47.5608C46.9787 57.073 46.4203 57.3043 46.0087 57.716C45.597 58.1276 45.3657 58.686 45.3657 59.2682C45.3657 59.8503 45.597 60.4087 46.0087 60.8203C46.4203 61.232 46.9787 61.4633 47.5608 61.4633H57.073V70.9755C57.073 71.5577 57.3043 72.116 57.716 72.5277C58.1276 72.9393 58.686 73.1706 59.2682 73.1706C59.8503 73.1706 60.4087 72.9393 60.8203 72.5277C61.232 72.116 61.4633 71.5577 61.4633 70.9755V61.4633H70.9755C71.5577 61.4633 72.116 61.232 72.5277 60.8203C72.9393 60.4087 73.1706 59.8503 73.1706 59.2682C73.1706 58.686 72.9393 58.1276 72.5277 57.716C72.116 57.3043 71.5577 57.073 70.9755 57.073H61.4633V47.5608Z"
        fill="#BA181B"
      />
    </svg>
  );
}

type Props = {};
const CreateTribute: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <div
      className={
        " grid grid-cols-1 max-h-[70vh] overflow-y-auto scrollbar gap-8 pr-3 max-w-[510px]"
      }
    >
      <div className="flex flex-col">
        <p
          className={cn(
            "text-[0.9375rem] -4 font-semibold block text-[#131313]"
          )}
        >
          Display Photo&nbsp;&nbsp;*
        </p>
        <p className="text-[#999898] text-[10px]">
          Add Headshot or passport size photo of contributor.
        </p>
        <div className="mt-2">
          <Button variant="icon" className="!p-0">
            <SVG />
          </Button>
        </div>
      </div>
      <Textfield required color="secondary" placeholder="Tribute By" />
      <Select required placeholder={"Select Relation"} />
      <TextArea color="secondary" label="Tribute" className="mt-8" required />
      {/* <div className="flex flex-row items-center gap-1">
        <Switch variant="outer-slider" color="secondary" />
        <p className={"text-[#666666]"}>I want to upload photos</p>
      </div> */}

      <AddButton
        label={"Add"}
        className={"ml-auto mt-8"}
        onClick={() => modal.closeModal()}
      />
    </div>
  );
};
export default CreateTribute;
