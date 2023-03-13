import React, { useRef } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { FileSelect, TextArea, Textfield } from "@components/ui/dashboard";
import FamilyRecipient from "./partials/FamilyRecipient";
// import { ModalRef } from "@components/modals/dashboard/edit-recipient";

import CreateRecipient from "./CreateRecipient";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

import AddButton from "@components/AddButton";
import FuneralForm from "../funeral-form";

interface Props {}

const FamilyFund: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <>
      <div className={s.root}>
        <div className={s.fields}>
          <FuneralForm />
          <div className={s.organizationField}>
            <div className={s.header}>
              <p className={cn(s.label, "!my-0")}>Recipients</p>
              <AddButton
                label={"Add"}
                className={s.createButton}
                onClick={() =>
                  modal.openModal(<CreateRecipient />, "Add Recipient")
                }
              />
            </div>
            <ul className={s.listRecipients}>
              <FamilyRecipient />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyFund;
