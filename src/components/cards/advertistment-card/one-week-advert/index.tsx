import React from "react";

import { Image } from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import { BiNewLink } from "@components/icons";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

export type OneWeekAdvertProps = { className?: string };

export default function OneWeekAdvert({ className }: OneWeekAdvertProps) {
  return (
    <article className={cn(className, s.root)}>
      <Image
        loading="lazy"
        className={s.advertImage}
        src={"/constants/advert.png"}
        alt={"advert"}
        objectFit={"cover"}
        objectPosition={"center"}
        quality={50}
      />
      <div className={s.header}>
        <h5>Quality Sound system.</h5>
        <BiNewLink />
      </div>
      <p className={s.paragraph}>
        Purus at odio facilisis sed. Eu nibh cursus nulla risus ultricies diam
        id laoreet sed. Quis morbi molestie donec convallis et lorem. Penatibus.
      </p>
      <div className={s.textBoxRoot}>
        <div className={s.content}>
          <b>Ad</b>
          <p>&middot;</p>
          <Link href={"/item"}>funeralsounds.com</Link>
        </div>
        <button>
          <BsThreeDotsVertical />
        </button>
      </div>
    </article>
  );
}
