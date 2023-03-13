/**
 *Project:damirifa
 *File:annoucement-overview
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import { DaDone } from "@components/icons/Illustrations";
import { useCSR } from "@components/navigator";
import SearchBarV2 from "@components/searchbar-v2";
import SelectV2 from "@components/select-v2";
import ViewHeading from "@components/ViewHeading";
import DashboardLayout from "@layouts/dashboard/dashboard";
import cn from "classnames";
import { NextPageContext } from "next";
import React, { useRef } from "react";
import { useState } from "react";

import CondolencesItem from "./condolences-item";
import s from "./index.module.css";

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
Condolences.Layout = DashboardLayout;
export default Condolences;
export async function getServerSideProps({ req, res }: NextPageContext) {
  // const isLoggedIn = getCookies({ req, res }); // - server si
  // return checkLoggedIn("/login", isLoggedIn);
  // const value = getCookies({ req, res }); // - server si
  // const _json = JSON.parse(value["dashboard-history"] || "{}");
  return {
    props: {},
    // redirect: {
    //   destination: "/dashboard/overview",
    //   permanent: false,
    // },
  };
}
