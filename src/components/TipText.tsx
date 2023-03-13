import React from "react";
import cn from "classnames";
type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const TipText = (props: Props) => {
  const { children, className } = props;
  return (
    <>
      <p className={cn("text-[12px] font-[Roboto]", className)}>
        <b className="font-[700]">TIP:</b> &nbsp;{children}
      </p>
    </>
  );
};
