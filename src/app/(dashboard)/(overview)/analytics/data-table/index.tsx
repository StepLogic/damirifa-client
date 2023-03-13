/**
 *Project:damirifa
 *File:data-table
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React, { Component } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { Image } from "@common-ui/index";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Badge from "@components/Badge";
import { uuid } from "@lib/Utils";
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import { useRouter } from "next/router";
type Props = {
  className?: string;
};
type Column = {
  label: string;
  icon: Component;
};

type Cell = {
  Component: Component;
};
const DataTable = (props: Props) => {
  const { className } = props;
  const sample = new Array(10).fill({});
  const navigator = useRouter();
  return (
    <div className={cn(s.root, "scrollbar")}>
      <table className={cn(s.table, className)}>
        <thead>
          <tr>
            <th>Announcement</th>
            <th>Average Donation</th>
            <th>Amount</th>
            <th>Condolences</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={"scrollbar"}>
          {sample.map((r) => (
            <tr onClick={() => navigator.push("analytics/1")} key={uuid()}>
              <td className={s.announcement}>
                <Image
                  src={"/constants/image-announcement.jpg"}
                  alt={"announcement image"}
                  className={s.image}
                />
                <div className={s.labels}>
                  <p>Mariam Makiba</p>
                  <div className="flex flex-row items-center gap-2">
                    <Badge
                      className={
                        "font-[600] w-[44px] !h-[13px] !text-[6px] tracking-[1.25px] "
                      }
                      bgColor={"#EDCFD0"}
                      textColor={"#BA181B"}
                    >
                      obituary
                    </Badge>
                    <p className={s.publishedStatus}>Published 3 days ago</p>
                  </div>
                </div>
              </td>
              <td className={s.av}>
                320&nbsp;<b>(70%)</b>
              </td>
              <td className={s.amount}>GHS 28,503.00</td>
              <td className={s.condolences}>405</td>
              <td className={s.timestamp}>
                <OptionsButtonTwo />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row items-center justify-end pt-8">
        <div className={cn("flex flex-row gap-2 mr-8", s.rowsPerPage)}>
          Rows Per Page:&nbsp;
          <select className={s.select}>
            <option disabled selected>
              10
            </option>
          </select>
        </div>
        <div className={s.pageNumbering}>1-5 of 5</div>
        <div className="flex flex-row items-center gap-[14px] ml-10">
          <BsChevronLeft color="#777777" />
          <BsChevronRight color="#777777" />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
