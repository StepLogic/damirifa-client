import AddButton from "@components/AddButton";
import { FileSelect, TextArea, Textfield } from "@components/ui/dashboard";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

import dynamic from "next/dynamic";
import React from "react";

import s from "./index.module.css";
// import CreateOrganization from "./partials/CreateOrganization";
// import OrganizationItem from "./partials/OrganizationItem";
import cn from "classnames";
import FuneralForm from "../funeral-form";
interface Props {}

{
  /* <CreateOrganization />; */
}
const CreateOrganization = dynamic(
  () => import("./partials/CreateOrganization"),
  {
    suspense: true,
  }
);
const OrganizationItem = dynamic(() => import("./partials/OrganizationItem"), {
  suspense: true,
});

const InstitutionalFund: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <>
      <div className={s.root}>
        <div className={s.fields}>
          <FuneralForm />
          <div className={s.recipientField}>
            <div className={s.header}>
              <p className={s.label}>Organization</p>
              <AddButton
                label={"Add"}
                className={s.createButton}
                onClick={() =>
                  modal.openModal(<CreateOrganization />, "Add Organization")
                }
              />
            </div>
            <ul className="!p-4">
              <OrganizationItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionalFund;
