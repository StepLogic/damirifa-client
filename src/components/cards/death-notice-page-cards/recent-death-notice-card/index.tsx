import React, { useEffect } from "react";
// import styled ffrom 'styled-components'
import s from "./index.module.css";
import cn from "classnames";
import { Divider, Image } from "@components/ui/common";
import { useRouter } from "next/router";
import {
  CardFlowers,
  CardInsignia,
  CardInsigniaTwo,
} from "@components/icons/Illustrations";
import { Moment } from "moment";
import Link from "next/link";
// Detailed Obituary Card
export type DeathNoticeCard = {
  className?: string;
  id: number;
  details: {
    deceased_name: string;
    deceased_image: string;
    date_of_birth: Moment;
    date_of_death: Moment;
    // suffix: string;
    // prefix: string;
  };
  payload: any;
};

export const DeathNoticeCard = ({
  className,
  details,
  id,
  payload,
}: DeathNoticeCard) => {
  const router = useRouter();

  return (
    <article
      role={"button"}
      onClick={() => router.push("death-notice/" + id)}
      className={cn(className, s.root)}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <CardInsignia />
        <p className={s.pHeading}>in loving memory</p>
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
        <CardFlowers className={s.flower} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className={s.name}>{details.deceased_name}</p>
        <p className={s.doBToDod}>{`[${details.date_of_birth.format(
          "YYYY"
        )} - ${details.date_of_death.format("YYYY")}]`}</p>
        <CardInsigniaTwo />
      </div>
    </article>
  );
};
export default React.memo(DeathNoticeCard);
