import React from "react";
import {SplideSlide} from "@splidejs/react-splide";
import {Button, Image, Link} from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";

import {BannerUser} from "@lib/interface/homepage/banner";
import ImagePlaceholder from "@common-ui/placeholder/ImagePlaceholder";
import TextPlaceholder from "@common-ui/placeholder/Placeholder ";
import Placeholder from "@common-ui/placeholder/Placeholder ";

interface Props {
    data?: BannerUser;
    isPlaceholder?: boolean;
}

export default function PrimeSpot(props: Props) {
    const {isPlaceholder = false, data} = props;

    return (
        <SplideSlide>
            <div data-placeholder={`${isPlaceholder}`} className={s.root}>
                {isPlaceholder ? (
                    <>
                        <ImagePlaceholder className={cn(s.heroImage)}/>
                        <div className={cn("mb-5 lg:mb-auto mt-auto", s.prompt)}>
                            <TextPlaceholder className={cn("w-full h-16")}/>
                            <TextPlaceholder
                                className={cn("h-6 lg:mt-3 2xl:mt-5 w-11/12 mb-4 mt-2")}
                            />
                            <Placeholder
                                className={
                                    "mt-4 h-[2.8125rem]  rounded-[100rem] w-[12.5rem] lg:mx-0 mx-auto"
                                }
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <Image
                            src={data?.image ? data.image.path : ""}
                            objectFit="cover"
                            className={cn(s.heroImage)}
                            priority={true}
                            alt="hero picture"
                        />
                        <div className={cn("mb-5 lg:mb-auto mt-auto", s.prompt)}>
                            <h1 className={"text-uppercase text-5xl w-full"}>
                                {data?.title}
                            </h1>
                            <p
                                className={
                                    "text-capitalize text-2xl text-grey-white  lg:mt-3 2xl:mt-5 w-11/12 mb-4 mt-2"
                                }
                            >
                                {data?.description}
                            </p>
                            <div className={"flex flex-row flex-wrap"}>
                                {data?.button_link !== "" && (
                                    <Link
                                        href={data?.button_link || "#"}
                                        className="sm:mr-4 mr-2 lg:w-fit flex flex-auto md:flex-none"
                                    >
                                        <Button
                                            className={cn("mt-4  w-6/12", s.getStartedButton)}
                                            variant="primary"
                                            size="sm"
                                            label={data?.button_text}
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </SplideSlide>
    );
}
