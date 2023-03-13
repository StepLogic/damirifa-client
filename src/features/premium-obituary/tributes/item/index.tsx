import React from "react";
import s from "./index.module.css";
import {Button, Image} from "@components/ui/common";

interface TributesProps {
    className?: string;
}

const TributeItem = () => {
    return (
        <li className={s.tributeItem}>
            <div className={"flex flex-col"}>
                <div className={s.tributeItemHeadingContainer}>
                    <div className={s.tributeItemHeading}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={s.icon}
                            width="70px"
                            height="60px"
                        >
                            <text
                                kerning="auto"
                                fontFamily="Questrial"
                                fill="rgb(0, 0, 0)"
                                fontSize="160px"
                                x="0px"
                                y="118.063px"
                            >
                                <tspan
                                    fontSize="160px"
                                    fontFamily="Playfair Display"
                                    fill="#e5e5e5"
                                >
                                    “
                                </tspan>
                            </text>
                        </svg>
                        <Image
                            className={s.image}
                            circle
                            src="/constants/jerry-1.jpg"
                            alt={"icon"}
                            loading="lazy"
                        />
                        <div className={s.textbox}>
                            <h5 className={s.name}>Solomon Ayeh</h5>
                            <h6 className={s.relation}>Brother</h6>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, has vero libris melius ea, omnis velit
                        comprehensam duo an, meis ornatus eam ad. Ius ut labores scaevola.
                    </p>
                    <Button
                        outline
                        variant="primary"
                        label="Read"
                        size="sm"
                        pill
                        className={s.button}
                    />
                </div>
            </div>
        </li>
    );
};
export default TributeItem;
