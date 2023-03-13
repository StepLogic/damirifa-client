import AddButton from "@components/AddButton";
import { BiAddProgram } from "@components/icons";
import { FileSelect } from "@components/ui/dashboard";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";
import cn from "classnames";
import dynamic from "next/dynamic";
import React from "react";

import s from "./index.module.css";

// import StreamEvent from "./stream-event";

interface Props {}

const CreateEvent = dynamic(() => import("./CreateEvent"), {
  suspense: true,
});
const CreateLiveStream = dynamic(() => import("./CreateLiveStream"), {
  suspense: true,
});
const StreamEvent = dynamic(() => import("./stream-event"), {
  suspense: true,
});
const EventItem = dynamic(() => import("./event-item"), {
  suspense: true,
});

const Events: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <>
      <div className={s.root}>
        <div className="flex flex-row justify-between items-center mt-[25px] mb-[18px]">
          <p className={s.header}>In Person</p>
          <AddButton
            label="Add Event"
            className="ml-auto "
            onClick={() => modal.openModal(<CreateEvent />, "Create Event")}
          />
        </div>

        <div className={s.eventItems}>
          <EventItem />
        </div>
        <div className="flex flex-row justify-between items-center mt-[25px] mb-[18px]">
          <p className={cn(s.header, "")}>Virtual</p>
          <AddButton
            label="Add Stream"
            className="ml-auto"
            onClick={() =>
              modal.openModal(<CreateLiveStream />, "Create Live Stream")
            }
          />
        </div>

        <div className={cn(s.eventItems, "py-2")}>
          <StreamEvent />
        </div>

        <p className={cn(s.header, "mt-10")}>Program</p>
        <FileSelect
          icon={<BiAddProgram />}
          variant="outline"
          color="secondary"
          className="mt-4 !h-[3.5rem]"
          placeholder="Upload Program Outline"
        />
      </div>
    </>
  );
};

export default Events;
