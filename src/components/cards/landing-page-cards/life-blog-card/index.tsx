import React from "react";
import cn from "classnames";
import s from "./index.module.css";
import {Image, Link} from "@components/ui/common";

type LifeBlogCardsProps = {
    className?: string;
    href?: string;
    src?: string;
    paragraph?: string;
};

export default function LifeBlogCards({
                                          className,
                                          href = "/#",
                                          src = "/constants/life-image.jpeg",
                                          paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem est aliquet aliquet vel nisi nullam. Commodo nisi, erat tristique rutrum. Vitae, risus leo purus quis semper nulla at eget. Lorem tempor non lorem porttitor`,
                                      }: LifeBlogCardsProps) {
    return (
        <article className={cn(className, s.root)}>
            <Image
                src={src}
                loading="lazy"
                alt="blog page image"
                className={s.imageWrapper}
                objectFit="cover"
                objectPosition={"center"}
                quality={60}
            />
            <div className={"flex flex-col"}>
                <h2 className={s.h2}>how to donate</h2>
                <p className={cn("text-justify mx-auto", s.p)}>
                    {paragraph.slice(0, 280)}
                    <Link href={href} variant="secondary" className="lowercase">
                        ...read more
                    </Link>
                </p>
            </div>
        </article>
    );
}
