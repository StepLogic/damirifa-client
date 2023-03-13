"use client";
import AddButton from "@components/AddButton";
import TabPane from "@components/tab-pane";
import ViewHeading from "@components/ViewHeading";
import AllAnnouncements from "@root/src/app/(dashboard)/(overview)/announcements/components/AllAnnouncements";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

import s from "./index.module.css";

type Props = {
  className?: string;
};

const Announcements = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn(s.root, "h-full", className)}>
      <ViewHeading label="Announcement" className={"mb-[30px]"}>
        <AddButton label="Create" />
      </ViewHeading>
      <TabPane>
        <TabPane.Tab name={"All"}>
          <AllAnnouncements />
        </TabPane.Tab>
        <TabPane.Tab name={"Obituary"}>Announcement</TabPane.Tab>
        <TabPane.Tab name={"One Week"}>Announcement</TabPane.Tab>
        <TabPane.Tab name={"Death Notice"}>Announcement</TabPane.Tab>
      </TabPane>
    </div>
  );
};
export default Announcements;
