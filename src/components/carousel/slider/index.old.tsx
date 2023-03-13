import React from "react";
import {Splide, SplideTrack} from "@splidejs/react-splide";
import cn from "classnames";
import "@splidejs/splide/dist/css/splide.min.css";
import s from "./index.module.css";
import {BsChevronRight} from "react-icons/bs";

export type Props = {
    children: React.ReactNode;
    className?: string;
    width?: string;
    multi?: boolean;
    defaultArrows?: boolean;
    thumbnail?: boolean;
    pricing?: boolean;
    autoPlay?: boolean;
    custom?: boolean;
    pagination?: boolean;
    ref?: any;
    pauseOnDesktop?: boolean;
};

export default function Slider(props: Props) {
    const {
        children,
        className,
        multi,
        width,
        pricing,
        autoPlay = true,
        thumbnail = false,
        defaultArrows = false,
        pagination = false,
        pauseOnDesktop = false,
        custom = false,
        ...rest
    } = props;
    let element: any;
    const ref = async (e: any) => {
        element = e;
    };
    // const [auto, toggleAuto] = useState<boolean>(autoPlay);
    // const { width: windowWidth } = useWindowDimensions();
    // useEffect(() => {
    //   // if (ref.current !== null) {
    //   const id = setInterval(() => {
    //     // try {
    //     if (auto) {
    //       if (!pauseOnDesktop && windowWidth < 1200)
    //         element && element.splide.go(">");
    //     }
    //     // } catch (e) {}
    //   }, 5 * 1000);
    //   // }
    //   return () => {
    //     clearInterval(id);
    //   };
    // }, [element, auto, pauseOnDesktop, windowWidth]);
    const generateConfiguration = () => {
        const config = {
            300: {
                fixedWidth: 280,
                gap: 0,
            },
            400: {
                perPage: 1,
                fixedWidth: 380,
                arrows: true,
                width: "100vw",
            },
            500: {
                perPage: 1,
                fixedWidth: 400,
            },
            640: {
                perPage: 2,
                arrows: true,
                width: "100vw",
                gap: "0",
                fixedWidth: 300,
            },
            1000: {
                perPage: 2,
                fixedWidth: thumbnail ? 162 : "",
                arrows: thumbnail,
            },
            3000: {
                fixedWidth: 400,
                arrows: false,
            },
        };
        if (thumbnail) {
            config[3000] = {
                fixedWidth: 162,
                gap: "4rem",
                perPage: 6,
                perMove: 1,
                arrows: true,
            };
        } else {
            config[3000] = {
                fixedWidth: 400,
                arrows: false,
            };
        }
        // if (pauseOnDesktop)
        //   config[1200] = {

        return config;
    };

    const config = generateConfiguration();
    return (
        <section className={cn(className, "position-relative w-full")}>
            {multi ? (
                <Splide
                    hasTrack={false}
                    aria-label="..."
                    ref={ref}
                    {...rest}
                    options={{
                        type: "slide",
                        rewind: true,
                        pagination: pagination,
                        width: "100vw",
                        cover: true,
                        focus: 1,
                        arrows: false,
                        perMove: 1,
                        autoPlay: true,
                        breakpoints: {...config},
                        ...rest,
                    }}
                >
                    <SplideTrack>{children}</SplideTrack>
                    <div className="splide__arrows">
                        <button
                            className={cn("splide__arrow splide__arrow--prev", {
                                [s.leftButton]: !defaultArrows,
                            })}
                        >
                            <BsChevronRight className="text-white"/>
                        </button>
                        <button
                            className={cn("splide__arrow splide__arrow--next", {
                                [s.rightButton]: !defaultArrows,
                            })}
                        >
                            <BsChevronRight className="text-white"/>
                        </button>
                    </div>
                </Splide>
            ) : custom ? (
                <Splide ref={ref} {...props}>
                    {children}
                </Splide>
            ) : (
                <Splide
                    ref={ref}
                    options={{
                        type: "slide",
                        rewind: true,
                        pagination: true,
                        width: "100vw",
                        cover: true,
                        focus: "center",
                        arrows: false,
                        perPage: 1,
                        perMove: 1,
                        autoPlay: true,
                        lazyLoad: "nearby",
                    }}
                >
                    {children}
                </Splide>
            )}
        </section>
    );
}
