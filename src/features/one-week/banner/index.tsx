/**
 *Project:damirifa
 *File:banner
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
type Props = {
  className?: string;
};

const Banner = (props: Props) => {
  const { className } = props;
  return <div className={cn(s.root, className)}></div>;
};

export default Banner;
