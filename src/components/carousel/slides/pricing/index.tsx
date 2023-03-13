import React from "react";
import {Image} from "@components/ui/common";
import s from "./index.module.css";

export type Props = {
    src: string;
    heading?: string;
    subLabel?: string;
};

export default function PricingPageDispalyBanner({
                                                     src = "",
                                                     heading,
                                                     subLabel,
                                                 }: Props) {
    return (
        <div className={s.root}>
            <Image
                priority
                objectFit={"contain"}
                src={src}
                alt={heading}
                className={s.image}
            />
            <Image
                priority
                objectFit={"contain"}
                src={src}
                alt={heading}
                className={s.image}
            />
            <div className={s.prompt}>
                <h1 className={s.h1}>{heading}</h1>
                <h3 className={s.h3}>{subLabel}</h3>
            </div>
        </div>
    );
}
