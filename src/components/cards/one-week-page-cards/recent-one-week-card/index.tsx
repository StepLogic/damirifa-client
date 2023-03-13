import React, { useEffect } from "react";
// import styled ffrom 'styled-components'
import s from "./index.module.css";
import cn from "classnames";
import { Divider, Image } from "@components/ui/common";
import {
  CardFlowers,
  CardInsigniaSmallOne,
  CardInsigniaSmallTwo,
  CardInsignia,
  CardInsigniaTwo,
  CardRose,
} from "@components/icons/Illustrations";
import { useRouter } from "next/router";
import { Moment } from "moment";
// Detailed Obituary Card
export type RecentObituaryCardProps = {
  className?: string;
  id: number;
  details: {
    deceased_name: string;
    deceased_image: string;
    date_of_birth: Moment;
    date_of_death: Moment;
    suffix: string;
    prefix: string;
  };
  payload: any;
};

export const OneWeekCard = ({
  className,
  details,
  payload,
  id,
}: RecentObituaryCardProps) => {
  const router = useRouter();

  return (
    <article
      role={"button"}
      onClick={() => router.push("one-week/" + id)}
      className={cn(className, s.root)}
    >
      <div className="flex flex-row items-center justify-between  gap-2">
        <p className={s.pHeading}>ONE WEEK CELEBRATION</p>
        <CardInsigniaSmallTwo />
      </div>
      <div className={s.imageWrapper}>
        <Image
          loading="lazy"
          src={details.deceased_image}
          objectFit="cover"
          objectPosition={"center"}
          quality={60}
          alt="dummy image"
          className={s.image}
        />
        <CardRose className={s.flower} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <CardInsigniaSmallOne />
        <p className={s.name}>
          {details.prefix + " " + details.deceased_name + " " + details.suffix}
        </p>
        <p className={s.doBToDod}>{`[${details.date_of_birth.format(
          "YYYY"
        )} - ${details.date_of_death.format("YYYY")}]`}</p>
        <CardInsigniaTwo />
      </div>
    </article>
  );
};
export default React.memo(OneWeekCard);
