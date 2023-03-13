import React from "react";
import cn from "classnames";
import s from "./index.module.css";
import {Divider, Image} from "@components/ui/common";
// Detailed Obituary Card
export type FreeRecentObituaryCardProps = { className?: string };

export default function FreeRecentObituaryCard({
                                                   className,
                                               }: FreeRecentObituaryCardProps) {
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
                    className={s.image}
                    quality={60}
                    alt="dummy image"
                />
            </div>
            <h3
                className={cn(
                    "text-center text-xl font-semibold text-white mb-2",
                    s.pushDown
                )}
            >{`Miriam Makiba`}</h3>
            <h5
                className={"text-center text-grey-white"}
                style={{marginBottom: "20px"}}
            >
                {`${25}`}&nbsp;years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`(${1985}-${2021})`}
            </h5>
            <Divider variant="secondary" className={"divider-white-thin mb-3"}/>
            <div className={s.textBox}>
        <span className="text-size-md fw-bold text-grey-white-2">
          Funeral Date:
        </span>
                <span className="text-size-md  fw-bold text-grey-white">
          20th April,1990
        </span>
                <span className="text-size-md  fw-bold text-grey-white-2">
          Event Location:
        </span>
                <span className="text-size-md fw-bold  text-grey-white">
          Flagstaff House ,Accra Ghana
        </span>
            </div>
        </article>
    );
}
