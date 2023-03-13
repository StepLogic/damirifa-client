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
import OptionsButtonTwo from "@components/OptionsButtonTwo";
import { Item } from "../../../../../../lib/interface";
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
const DonorTable = (props: Props) => {
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
            <th>Amount</th>
            <th>Donated</th>
          </tr>
        </thead>
        <tbody className={"scrollbar"}>
          {sample.map((r) => (
            <tr key={uuid()}>
              <td className={cn(s.Item, "font-medium")}>Kofi Mensah</td>
              <td className={cn(s.Item, "")}>kmensah@mail.com</td>
              <td className={cn(s.Item)}>
                Lorem ipsum dolor sitdolor sit amet consecte. Lorem ipsum dolor
                sitdolor sit amet consecte...
              </td>
              <td className={cn(s.Item, "font-medium")}>GHS 5,000.00</td>
              <td className={cn(s.Item)}>2 mins ago</td>
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

export default DonorTable;
