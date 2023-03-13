import React from "react";
import {Image} from "@components/ui/common";
import s from "./index.module.css";
import cn from "classnames";

const ObituaryPremium = () => {
    return (
        <div className={s.root}>
            <Image
                src="/constants/jerry.jpg"
                alt="banner picture"
                className={s.image}
                objectFit="cover"
                loading="lazy"
                quality={30}
            />
            <div id="main-hero" className={s.textBody}>
                <div className={"px-4"}>
                    <div className="mr-auto lg:ml-10">
                        <h1
                            className={
                                "lg:text-xl text-2xl text-white font-semibold lg:w-9/10"
                            }
                        >
                            Flt. Lt. Jerry John Rawlings.
                        </h1>
                        <h4
                            className={
                                "lg:text-sm text-xs text-white font-semibold mt-1 mb-3"
                            }
                        >
                            (1947 - 2020)
                        </h4>

                        <div className={cn("flex flex-column", s.quotes)}>
                            <blockquote
                                style={{backgroundColor: "transparent"}}
                                className={" text-grey-white-2"}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                fringilla vel lacus vel blandit. Sed sollicitudin tempus libero,
                                a faucibus ligula pretium quis
                                <br/>{" "}
                                <p className={"text-bold quote-author"}> - Viola Campbell</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObituaryPremium;
