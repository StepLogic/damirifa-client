import s from "./index.module.css";
import cn from "classnames";
import {Button, Image} from "@components/ui/common";
import Qoute2 from "@root/public/svgs/quote-2.svg";
import i from "./scroll.module.css";
import React, {ReactNode} from "react";

function Appreciation() {
    const paragraph = `This card is a very versatile card component. It automatically spans the
        width of its container. you can do many things with this card`;
    return (
        <div className={s.appreciation}>
            <Image
                src={Qoute2}
                width={60}
                height={60}
                alt="icon"
                loading="lazy"
                className={cn(s.icon, " left-0", s.zUp)}
            />
            <i>Peter Boadi - Friend </i>
            <p>{paragraph.slice(0, 180)}...</p>
            <Image
                src={Qoute2}
                width={60}
                height={60}
                alt="icon"
                loading="lazy"
                className={cn(s.icon, " left-0", s.zDown)}
            />
        </div>
    );
}

function CarouselItem() {
    const paragraph =
        " I am grateful for your support in my time of need.You are a true friend";
    return (
        <div
            className={cn("flex flex-col items-center justify-center py-10", i.item)}
        >
            <h5 className="text-white text-2xl text-center">
                Thank You, George Acquah
            </h5>
            <p className="text-center">{paragraph.slice(0, 280)} &nbsp;...</p>
        </div>
    );
}

const InfiniteScroll = ({children}: { children: ReactNode }) => {
    const numberOfChildren = React.Children.count(children);
    const style = {
        // "--scale": generateRandom(50, 100) / 100,
        "--number": numberOfChildren,
    } as React.CSSProperties;
    return (
        <div className={i.root}>
            <div className={i.container} style={style}>
                {children}
            </div>
        </div>
    );
};
const Appreciations = () => {
    return (
        <div className={cn("relative", s.backgroundOne)}>
            {/* <h2>Condolences</h2> */}

            <div
                className={cn(
                    "flex flex-col lg:flex-row gap-12 p-3 pt-10",
                    s.backgroundOne
                )}
            >
                <div className={cn(s.appreciationBackground, "pt-2")}>
                    <Image
                        src={"/assets/background/tribute-appreciation.jpg"}
                        alt={"background"}
                        className={s.appreciationImage}
                        loading="lazy"
                    />
                    <div className={s.overlay}>
                        <InfiniteScroll>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/> <CarouselItem/> <CarouselItem/>
                            <CarouselItem/> <CarouselItem/> <CarouselItem/>
                            <CarouselItem/>
                        </InfiniteScroll>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className=" pl-4 pt-2 pb-2 text-2xl text-left">Appreciations</h2>
                    <div className={cn("flex flex-col relative", s.background)}>
                        <div className={s.appreciationList}>
                            <div className="flex flex-col gap-10 px-3">
                                <Appreciation/>
                                <Appreciation/>
                                <Appreciation/>
                                <Appreciation/>
                                <Appreciation/>
                            </div>
                        </div>
                        <div className={s.fadedBottom}/>
                    </div>
                    <Button
                        pill
                        outline
                        size="md"
                        variant="primary"
                        className={cn("mx-auto mb-4 xl:mb-0")}
                        label="View All"
                    />
                </div>
            </div>
        </div>
    );
};

export default Appreciations;
