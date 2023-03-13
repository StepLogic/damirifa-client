/**
 *Project:damirifa
 *File:analytics-card
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React from "react";
import s from "./index.module.css";
import cn from "classnames";
import { useCSR } from "@components/navigator";
type Props = {
  className?: string;
  title: string;
  criticalText: string;
  value: string;
  information: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const AnalyticsCard = (props: Props) => {
  const navigator = useCSR();
  const {
    className,
    title,
    value,
    criticalText,
    information,
    buttonLabel,
    buttonLink,
  } = props;
  return (
    <div className={cn(s.root, className)}>
      <div className={s.textBox}>
        <p className={s.title}>{title}</p>
        <div>
          <p className={s.value}>{value}</p>
          <p className={s.information}>
            <b className={s.criticalText}>{criticalText}</b>&nbsp;{information}
          </p>
        </div>
      </div>
      <div className={s.divider} />
      {buttonLabel && (
        <button
          onClick={() => buttonLink && navigator.setRoute(buttonLink)}
          className={s.link}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default AnalyticsCard;
