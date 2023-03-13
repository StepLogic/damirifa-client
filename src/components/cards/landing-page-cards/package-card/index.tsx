import React from "react";
import {Button} from "@components/ui/common";
import {v4 as uuid} from "uuid";
import cn from "classnames";
import s from "./index.module.css";

type Props = {
    className?: string;
    label?: string;
    iconHref?: string;
    featureList?: Array<string>;
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
                                    }: Props) {
    return (
        <article className={cn(className, s.root)}>
            <div className={s.cardHeader}>
                <h2 className="my-auto">{label}</h2>
            </div>
            <div className={s.cardBody}>
                <div className={"text-5xl text-center my-10 text-white"}>GHS 0</div>
                <ul className="list ">
                    {featureList &&
                        featureList.map((feature) => (
                            <li className={s.listItem} key={uuid()}>
                                <div className={s.marker}/>
                                <span className={s.text}>{feature}</span>
                            </li>
                        ))}
                </ul>
                <Button
                    className={"my-2 mx-auto"}
                    size="md"
                    variant="primary"
                    pill
                    onClick={() => {
                    }}
                    label="View Sample"
                />
            </div>
        </article>
    );
}
