import {Button, Link} from "@components/ui/common";
import React, {useEffect, useRef} from "react";
import cn from "classnames";
import s from "./index.module.css";
import {Clock} from "@assets/js/Clock";

const CountDownFlip = () => {
    const loadClock = useRef<boolean>(true);
    const toAbsoluteUrl = (pathname: string) => "/" + pathname;
    useEffect(() => {
        if (loadClock.current) {
            loadClock.current = false;
            const deadline = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000);
            Clock.bootstrap(
                document.getElementById("clock-holder"),
                deadline.toString()
            );
        }
    }, [loadClock]);

    return <div id="clock-holder" className={"w-full"}></div>;
};

const LiveStream = ({className}) => {
    return (
        <div className={cn("side-image livestream", s.root, className)}>
            <div className={cn("p-3", "flex flex-col items-center")}>
                <h1
                    className={cn("is-3 mt-2 font-bold text-white ls-3 text-xl xl:mb-3")}
                >
                    LIVE STREAM
                </h1>
                <h1
                    className={cn(
                        "is-3 mt-2 font-bold text-white ls-3 text-lg xl:text-base xl:mb-3"
                    )}
                >
                    Laying In State
                </h1>
                <CountDownFlip/>
                <Link
                    href="src/components/cards/obituary-page-cards/premium/live-stream#!"
                    className={cn("font-bold text-white underline", s.link)}
                >
                    Add to Calendar
                </Link>
                <time
                    dateTime="2022-05-25 18:30"
                    className={cn("font-bold text-white my-3", s.date)}
                >
                    June 25 2018 @ 6:30 PM
                </time>
                <Button
                    variant="primary"
                    size="sm"
                    pill
                    outline
                    className={cn(
                        "button is-small  reg-title btn-outlined is-rounded is-bold padding-10 mt-3 mb-2  light-btn ",
                        s.button
                    )}
                >
                    <span>VIEW</span>
                </Button>
            </div>
        </div>
    );
};

export default React.memo(LiveStream);
