import { Button } from "@components/ui/dashboard";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import RModal from "react-modal";

type Props = {
  children?: React.ReactNode;
  isOpen?: boolean;
  onRequestClose: Function;
  title: string;
  noHeader?: boolean;
};

// eslint-disable-next-line react/display-name
const Modal = (props: Props) => {
  RModal.setAppElement("#__next");
  const { children, isOpen, onRequestClose, noHeader = false, title } = props;
  return (
    <RModal
      isOpen={isOpen || false}
      onRequestClose={() => onRequestClose()}
      overlayClassName={"modalOverlay"}
      className={
        "lg:min-w-[510px] lg:max-w-[80%] !w-[90%] lg:!w-fit bg-white px-[19px] py-4 rounded-[4px]"
      }
      style={{
        overlay: { padding: 0, paddingInline: 0 },
      }}
    >
      <div className="flex flex-col w-full px-4">
        {noHeader === false && (
          <div className="flex flex-row justify-between items-center mb-10">
            <p
              className={
                "font-[Roboto] font-[600] text-base leading[140%] tracking-[0.0041em]text-[#161616]"
              }
            >
              {title}
            </p>
            <Button
              variant="outline"
              color="secondary"
              onClick={() => onRequestClose()}
              className={"!h-[38px]"}
            >
              <AiOutlineClose color="#ba181b" />
            </Button>
          </div>
        )}
        {children}
      </div>
    </RModal>
  );
};
Modal.displayName = "Edit Events";
export default Modal;
