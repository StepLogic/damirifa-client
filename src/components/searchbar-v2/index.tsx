/**
 *Project:damirifa
 *File:searchbar-v2
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
type Props = {
  className?: string;
};

function SearchBarV2(props: Props) {
  const { className } = props;
  return (
    <div className={cn(s.searchBar, className)}>
      <AiOutlineSearch />
      <input placeholder="Search..." />
    </div>
  );
}
export default SearchBarV2;
