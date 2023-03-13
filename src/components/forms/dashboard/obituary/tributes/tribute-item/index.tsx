import { BiDelete, BiNoteEdit } from "@components/icons";
import React from "react";
import s from "./index.module.css";
import { Button } from "@components/ui/dashboard";
import { Image } from "@components/ui/common";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

import CreateTribute from "../CreateTribute";

const TributeItem = () => {
  const modal = useModalContext();
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dolor quisque bibendum justo, sem vitae. Habitant egestas quisque bibendum pulvinar.Habitant egestas quisque bibendum pulvinar. Lectus dolor quisque bibendum justo, sem vitae";
  return (
    <div className={s.tributeItem}>
      <p className={s.body}>
        {paragraph.slice(0, 300)}...<i className={s.alt}>[Full Tribute]</i>
      </p>
      <div className={s.footer}>
        <div className={"flex flex-row"}>
          <Button
            // showTooltip="Edit Tribute"
            variant="icon"
            className="!bg-none !text-[#585858] !pr-4 !pl-0 !pt-0 !pb-0"
            onClick={() => modal.openModal(<CreateTribute />, "Create Tribute")}
          >
            <BiNoteEdit />
          </Button>
          <Button
            // showTooltip="Delete Tribute"
            variant="icon"
            className="!bg-none !text-[#585858] !p-0"
          >
            <BiDelete />
          </Button>
        </div>
        <div className={s.paragraph}>
          <div className="flex flex-col gap-[0.1px] pr-3">
            <p className={s.name}>Mariam Makiba Snr</p>
            <p className={s.relation}>Mother</p>
          </div>
          <Image
            src={"/constants/image-announcement.jpg"}
            alt={"announcement image"}
            className={s.image}
          />
        </div>
      </div>
    </div>
  );
};
export default TributeItem;
