import React from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
  className?: string;
  progress?: number;
}

const RadialProgress: React.FC<Props> = (props) => {
  const { children, className, progress = 60 } = props;
  return (
    <div className={cn(s.root, className)}>
      <svg
        width="1em"
        height="1em"
        fill="none"
        className={cn(s.progress)}
        viewBox="0 0 36 36"
      >
        <path
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          className={s.svgIndicatorTrack}
          strokeWidth="2"
          strokeDasharray={`${100}, 100`}
        />
        <path
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          className={s.svgIndicatorIndication}
          strokeWidth="2"
          strokeDasharray={`${progress}, 100`}
        />
      </svg>
      {children}
    </div>
  );
};

export default RadialProgress;
