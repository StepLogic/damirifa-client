/**
 *Project:damirifa
 *File:annoucement-overview
 *Created by KojoGyaase
 *Copyright damirifa
 **/
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
import { Image } from "@components/ui/common";
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
import CondolencesItem from "./condolences-item";

import s from "./index.module.css";
import { useState } from "react";
import SearchBarV2 from "@components/searchbar-v2";

type Props = {
  className?: string;
};

const Condolences = (props: Props) => {
  const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={cn(s.root, "h-full", className)}>
      <ViewHeading label="All Condolences" className={"mb-[30px]"} />
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => setHidden(false)}
          data-selected={`${!hidden}`}
          className={s.pill}
        >
          Published
        </button>
        <button
          data-selected={`${hidden}`}
          onClick={() => setHidden(true)}
          className={s.pill}
        >
          Hidden
        </button>
        <div className="flex flex-row items-center ml-auto">
          <SearchBarV2 />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <SelectV2 className={s.select} />
      </div>
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
        <ul className={cn("mt-4 scrollbar", s.list)}>
          <CondolencesItem />
          <CondolencesItem />
          <CondolencesItem />
          <CondolencesItem />
          <CondolencesItem />
        </ul>
      )}
    </div>
  );
};

export default Condolences;
