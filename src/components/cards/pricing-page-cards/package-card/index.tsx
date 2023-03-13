import React from "react";

import { v4 as uuid } from "uuid";
import cn from "classnames";
import s from "./index.module.css";
import { Button, Link } from "@components/ui/common";

type Props = {
  className?: string;
  label: string;
  iconHref: string;
  featureList: Array<string>;
  showSampleLink?: boolean;
};

export default function PackageCard({
  className,
  label = "Default",
  iconHref = "/svgs/crown.svg",
  featureList = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],
  showSampleLink = false,
}: Props) {
  return (
    <article className={cn(className, s.root)}>
      <div className={s.cardHeader}>
        <h2 className="my-auto">{label}</h2>
      </div>
      <div className={s.cardBody}>
        <svg
          // height={91}
          // width={102}
          className={cn("flex items-center justify-center", s.svg)}
        >
          <image xlinkHref={iconHref} className={cn(s.svgImage)} />
        </svg>
        <span className={s.priceText}>
          Ghc 50<span className={"text-grey-white-2"}>/month</span>
        </span>
        <ul className="w-9/10 mx-auto flex flex-col items-center">
          {featureList &&
            featureList.map((feature) => (
              <li className={s.listItem} key={uuid()}>
                <div className={s.marker} />
                <span className={s.text}>{feature}</span>
              </li>
            ))}
        </ul>
        <Button
          className={"my-2 mx-auto"}
          size="md"
          variant="primary"
          onClick={() => {}}
          pill
          label="Start Here"
        ></Button>
        {showSampleLink ? (
          <Link variant="secondary" href={"#"}>
            View sample
          </Link>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
