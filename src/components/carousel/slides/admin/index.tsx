import React from "react";
import {useRouter} from "next/navigation";
import {SplideSlide} from "@splidejs/react-splide";
import {Button, Image} from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import {BannerAdmin} from "@lib/interface/homepage/banner";
import {AiOutlinePlayCircle} from "react-icons/ai";

export default function Admin({
                                  image,
                                  title,
                                  description,
                                  video_link,
                                  video_text,
                                  button_link,
                                  button_text,
                              }: BannerAdmin) {
    const router = useRouter();
    return (
        <SplideSlide>
            <div className={s.root}>
                {/*<ImageContainer priority className={"responsive-image"} src={responsive-image} alt={heading} />*/}
                {image ? (
                    <Image
                        src={image ? image.path : ""}
                        objectFit="cover"
                        className={cn(s.heroImage)}
                        priority={true}
                        alt={image ? image.name : ""}
                    />
                ) : (
                    <></>
                )}
                <div className={cn("mb-5 lg:mb-auto mt-auto", s.prompt)}>
                    <h1 className={"text-uppercase hero-heading w-full"}>{title}</h1>
                    <p
                        className={
                            "text-capitalize hero-paragraph text-grey-white fs-5 lg:mt-3 2xl:mt-5 w-11/12 mb-4 mt-2"
                        }
                    >
                        {description}
                    </p>
                    <div className={"flex flex-row flex-wrap"}>
                        {button_link && button_link !== "" && (
                            <Button
                                className={cn("mt-4", s.getStartedButton)}
                                variant="primary"
                                size="sm"
                                onClick={() => {
                                    router.push(button_link);
                                }}
                                label={video_text || "View More"}
                            />
                        )}
                        {video_link && video_link !== "" && (
                            <Button
                                className={cn("mt-4 ml-2", s.howDamirifaWorks)}
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    router.push(video_link);
                                }}
                            >
                                <AiOutlinePlayCircle className="text-xl"/>
                                <span>{button_text || "View More"}</span>
                            </Button>
                            // </Link>
                        )}
                    </div>
                </div>
            </div>
        </SplideSlide>
    );
}
