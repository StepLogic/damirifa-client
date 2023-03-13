import React from "react";
import ReactNode from "react";
import cn from "classnames";
function ViewHeading(props: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between w-full",
        props.className
      )}
    >
      <h2
        className={
          "text-[22px] text-[#161A1D] mr-auto leading-[140%] tracking-[0.004em] font-[500]"
        }
      >
        {props.label}
      </h2>
      {props.children}
    </div>
  );
}
export default React.memo(ViewHeading);
