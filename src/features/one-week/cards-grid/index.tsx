/**
 *Project:damirifa
 *File:CardsGrid
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
type Props = {
  className?: string;
};

const CardsGrid = (props: Props) => {
  const { className } = props;
  return <div className={cn(s.root, className)}></div>;
};

export default CardsGrid;
