import AddButton from "@components/AddButton";
// import { ModalChildRef } from '@components/modals/dashboard/edit-events';
import { FileSelect, Switch, Textfield } from "@components/ui/dashboard";
import Dropzone from "@components/ui/dashboard/dropzone";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

import cn from "classnames";
import React from "react";
import { BsFileMusic, BsPlayCircle } from "react-icons/bs";

type Props = {};
const AddAlbum: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <div className={"grid grid-cols-1 gap-4 max-w-[510px]"}>
      <Textfield color="secondary" placeholder="Album Title" required />

      <Dropzone className="!h-[150px]" />
      {/* <div className={"grid grid-cols-2 gap-4"}>
        <Textfield
          color="secondary"
          placeholder="Starts At"
          icon={<BiTime />}
        />
        <Textfield color="secondary" icon={<BiTime />} placeholder="Ends At" />
      </div> */}
      <p className="fieldLabel">Background Music</p>
      <p className="text-[9px] leading-[140%] tracking-[0.0041em] text-[#363636]">
        Select a tune for visitors to listen to while viewing pictures in the
        album. Music is set to silent by default.
      </p>
      <div className="flex flex-row items-center">
        <Switch />
        <BsFileMusic color="#363636" className="ml-2" />
        <FileSelect variant="default" className="!border-[none] !w-[50%]" />
        <BsPlayCircle color="#BA181B" />
      </div>

      <AddButton
        label="Add"
        className={cn("mt-2 ml-auto")}
        onClick={() => modal.closeModal()}
      />
    </div>
  );
};
export default React.memo(AddAlbum);
