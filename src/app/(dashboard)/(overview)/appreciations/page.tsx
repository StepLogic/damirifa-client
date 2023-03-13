'use client';

import {
  BiDonate,
  BiEditFill,
  BiHeartEnvelope,
  BiNewWindow,
} from "@components/icons";
import { DaDone } from "@components/icons/Illustrations";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import SelectV2 from "@components/select-v2";
import { Image } from "@common-ui/index";
import { Button, Select } from "@components/ui/dashboard";
import ViewHeading from "@components/ViewHeading";
import cn from "classnames";
import React, { useRef } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import AppreciationItem from "./appreciation-item";
import DashboardLayout from "@layouts/dashboard/dashboard";
import s from "./index.module.css";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBarV2 from "@components/searchbar-v2";



type Props = {
  className?: string;
};

const Appreciations = (props: Props) => {
  const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={cn(s.root, "h-full", className)}>
      <ViewHeading label="All Appreciation" className={"mb-[30px]"}>
        <Button className="" variant="outline" color="secondary">
          <AiOutlinePlus color=" #BA181B" />
          &nbsp;New
        </Button>
      </ViewHeading>
      <SearchBarV2 className="ml-auto" />
      {hidden ? (
        <div
          className={cn(
            s.list,
            "h-full justify-center gap-6 items-center flex flex-col"
          )}
        >
          <DaDone />
          <p className={s.label}>Awesome work, you are all caught up!</p>
        </div>
      ) : (
        <ul className={cn("mt-20 scrollbar", s.list)}>
          <AppreciationItem />
          <AppreciationItem />
          <AppreciationItem />
          <AppreciationItem />
          <AppreciationItem />
        </ul>
      )}
    </div>
  );
};
Appreciations.Layout = DashboardLayout;
export default Appreciations;
