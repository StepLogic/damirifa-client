import React from "react";
// import styled from 'styled-components'
// import ResponsiveImage from '../../../ui/image'
// import Divider from '../../../ui/divider'
import {Divider, Image} from "@components/ui/common";
import cn from "classnames";
import s from "./index.module.css";
import {RecentObituaries} from "@lib/interface/homepage/obituaries";
import ImagePlaceholder from "@common-ui/placeholder/ImagePlaceholder";
import TextPlaceholder from "@common-ui/placeholder/Placeholder ";
import Placeholder from "@common-ui/placeholder/Placeholder ";
import {isValueUndefined} from "@lib/Utils";

type RecentObituaryCardProps = { className?: string };

interface Props {
    className?: string;
    data?: RecentObituaries;
    isPlaceholder?: boolean;
}

export default function RecentObituaryCard(props: Props) {
    const {className, data, isPlaceholder = false} = props;
    return (
        <article className={cn(className, s.root)}>
            <div className={s.imageWrapper}>
                {isValueUndefined(data) || isPlaceholder ? (
                    <>
                        <ImagePlaceholder className={cn(s.image, "rounded-[50%]")}/>
                    </>
                ) : (
                    <Image
                        loading="lazy"
                        circle
                        border
                        src={data?.photo || ""}
                        objectFit="cover"
                        objectPosition={"center"}
                        className={s.image}
                        quality={60}
                        alt={data?.name || ""}
                    />
                )}
            </div>
            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <TextPlaceholder
                        className={cn(
                            "self-center w-[8.5rem] h-[1.5625rem] mb-2",
                            s.pushDown
                        )}
                    />
                </>
            ) : (
                <span
                    className={cn(
                        "text-center text-xl font-semibold text-white mb-2",
                        s.pushDown
                    )}
                >{`${data?.name}`}</span>
            )}
            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <TextPlaceholder
                        className={cn("self-center w-[2.625rem] h-[1.1875rem] mb-3")}
                    />

                    <TextPlaceholder className="w-[15.3125rem] self-center h-[0.0625rem] mb-3"/>
                </>
            ) : (
                <>
                    <h5
                        className={"text-center text-grey-white"}
                        style={{marginBottom: "20px"}}
                    >
                        {`${data?.age}`}&nbsp;years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`(${data?.year_birth}-${data?.year_death})`}
                    </h5>
                    <Divider variant="secondary" className={"divider-white-thin mb-3"}/>
                </>
            )}

            {isValueUndefined(data) || isPlaceholder ? (
                <>
                    <div className={s.textBox}>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                        <TextPlaceholder className="w-[6.4375rem] h-[1.0625rem]"/>
                    </div>
                </>
            ) : (
                <div className={s.textBox}>
          <span className="text-size-md fw-bold text-grey-white-2">
            Funeral Date:
          </span>

                    <span className="text-size-md  fw-bold text-grey-white">
            {data?.funeral_date}
          </span>
                    <h6 className="text-size-md  fw-bold text-grey-white-2">Location:</h6>
                    <h6 className="text-size-md fw-bold  text-grey-white">
                        {data?.location}
                    </h6>
                    <h6 className="text-size-md  fw-bold text-grey-white-2">Time:</h6>
                    <h6 className="text-size-md fw-bold  text-grey-white">
                        {data?.funeral_time}
                    </h6>
                </div>
            )}
        </article>
    );
}
