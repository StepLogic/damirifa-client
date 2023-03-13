import React from "react";
// import styled ffrom 'styled-components'
import s from "./index.module.css";
import cn from "classnames";
import { Divider, Image } from "@components/ui/common";
// Detailed Obituary Card
export type RecentObituaryCardProps = { className?: string };

export const RecentObituaryCard = ({ className }: RecentObituaryCardProps) => {
  return (
    <article className={cn(className, s.root)}>
      <div className={s.imageWrapper}>
        <Image
          loading="lazy"
          circle
          border
          src={"/constants/obituary-image-2.jpeg"}
          objectFit="cover"
          objectPosition={"center"}
          quality={60}
          alt="dummy image"
          className={s.image}
        />
      </div>
      <h3
        className={cn(
          "text-center text-xl font-semibold text-white mb-2 text-xl font-semibold",
          s.pushDown
        )}
      >{`Miriam Makiba`}</h3>
      <h5
        className={"text-center text-grey-white"}
        style={{ marginBottom: "20px" }}
      >
        {`${25}`}&nbsp;years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`(${1985}-${2021})`}
      </h5>
      <Divider
        variant="secondary"
        height="very-thin"
        className={"text-grey-white w-full mb-3"}
      />
      <div className={s.textBox}>
        <span className="text-grey-white-2">Funeral Date:</span>
        <span className="text-grey-white">20th April,1990</span>
        <span className=" text-grey-white-2">Event Location:</span>
        <span className="text-size-md fw-bold  text-grey-white">
          Flagstaff House ,Accra Ghana
        </span>
        <h6 className="text-grey-white-2">Time:</h6>
        <h6 className="text-grey-white">12pm</h6>
        <h6 className="text-size-md  fw-bold text-grey-white-2">Relatives:</h6>
        <h6 className="text-grey-white">
          Angel Ankobea, Henry Ford, Maxwell Hardy
        </h6>
      </div>
    </article>
  );
};
export default React.memo(RecentObituaryCard);
