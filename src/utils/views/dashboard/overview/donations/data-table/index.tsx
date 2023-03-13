/**
 *Project:damirifa
 *File:data-table
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React, { Component } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { Image } from "@components/ui/common";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Badge from "@components/Badge";
import { uuid } from "../../../../../../lib/Utils";
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
  return (
    <div className={cn(s.root, "scrollbar")}>
      <table className={cn(s.table, className)}>
        <thead>
          <tr>
            <th>Donor</th>
            <th>Email</th>
            <th>Message</th>
            <th>Announcement</th>
            <th>Amount</th>
            <th>Donated</th>
          </tr>
        </thead>
        <tbody className={"scrollbar"}>
          {sample.map((r) => (
            <tr key={uuid()}>
              <td className={s.donor}>Donor</td>
              <td className={s.email}>Email</td>
              <td className={s.message}>Message</td>
              <td className={s.announcement}>
                <Image
                  src={"/constants/image-announcement.jpg"}
                  alt={"announcement image"}
                  className={s.image}
                />
                <div className={s.labels}>
                  <p>Mariam Makiba</p>
                  <Badge
                    className={
                      "font-[600] w-[44px] !h-[13px] !text-[6px] tracking-[1.25px] "
                    }
                    bgColor={"#EDCFD0"}
                    textColor={"#BA181B"}
                  >
                    obituary
                  </Badge>
                </div>
              </td>
              <td className={s.amount}>Amount</td>
              <td className={s.timestamp}>Donated</td>
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
