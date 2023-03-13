import {Button, Image, Tooltip} from "@components/ui/common";
import React, {useEffect, useMemo, useRef, useState} from "react";
import throttle from "lodash.throttle";
import {
    BsChevronLeft,
    BsChevronRight,
    BsFillInfoCircleFill,
    BsFillVolumeMuteFill,
    BsGrid3X3GapFill,
    BsVolumeUpFill,
} from "react-icons/bs";
import s from "./index.module.css";
import cn from "classnames";
import {v4 as uuid} from "uuid";
import {FaFacebookSquare, FaInstagram, FaPause, FaPlay, FaTwitter,} from "react-icons/fa";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {RiFullscreenExitLine, RiFullscreenLine} from "react-icons/ri";
import useFullScreen from "@lib/hooks/useFullScreen";

// import { reverse } from "cypress/types/lodas

import AudioPlayer from "@components/audio-player";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";

const FlipBook = () => {
    const galleryImages: string[] = [
        "/constants/gallery-1.jpg",
        "/constants/gallery-2.jpg",
        "/constants/gallery-3.jpg",
        "/constants/gallery-4.jpg",
        "/constants/gallery-5.jpg",
        "/constants/gallery-6.jpg",
        "/constants/gallery-1.jpg",
        "/constants/gallery-2.jpg",
        "/constants/gallery-3.jpg",
        "/constants/gallery-4.jpg",
        "/constants/gallery-5.jpg",
        "/constants/gallery-6.jpg",
    ];
    const [expandControls, setExpandControls] = useState(true);
    const [showGrid, setShowGrid] = useState(false);
    const [showCaption, setCaption] = useState(true);
    const [playMusic, setPlayMusic] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    const {containerRef, fullScreen, toggleFullScreen} = useFullScreen();

    const {closeModal} = useModalContext();
    let element: any;
    let thumbnail: any;
    const ref = async (e: any) => {
        element = e;
        // console.log("elemeent", e);
    };
    const thumbnailRef = async (e: any) => {
        thumbnail = e;
    };

    useEffect(() => {
        if (element && thumbnail && thumbnail.splide) {
            element.sync(thumbnail.splide);
            const total = element.splide.length;
            // setTotalImages(element.splide.length);
            const _pagination = document.querySelector("#pagination");
            if (_pagination !== null) {
                _pagination.innerHTML = `${1} / ${total}`;
                element.splide.on(
                    "moved",
                    throttle((newIndex: number, prevIndex: number, destIndex: number) => {
                        // console.lo("Active Index", newIndex);
                        // setCurrentSlideIndex(newIndex + 1);
                        _pagination.innerHTML = `${newIndex + 1} / ${total}`;
                    }, 500)
                );
            }
        }
    }, []);

    useEffect(() => {
        // if (ref.current !== null) {
        // const _int = setInterval(() => {
        // console.log("Active", autoPlay, element);
        let AutoPlay = element && element.splide.Components.Autoplay;
        let flag = 99;
        // try {
        console.log("Auto", AutoPlay);
        if (autoPlay && AutoPlay) {
            // console.log("Active-inner", autoPlay, "element", element);
            AutoPlay.play();
        } else {
            AutoPlay.pause();
            // element && element.splide.pause();
        }
    }, [autoPlay]);

    const nextImage = () => {
        element && element.splide.go(">");
    };
    const prevImage = () => {
        element && element.splide.go("<");
    };
    const toggleAutoPlay = () => {
        setAutoPlay((prev) => !prev);
    };
    const selectMarqueeItem = (index: number) => {
        toggleGrid();
        element && element.splide.go(index);
    };
    const toggleGrid = () => {
        setShowGrid((prev) => !prev);
    };
    const toggleMusic = () => {
        if (audioPlayerRef.current !== null) {
            audioPlayerRef.current.playMedia();
            setPlayMusic((prev) => !prev);
        }
    };
    useEffect(() => {
        console.log("Fullscreen obituary", fullScreen, "Show grid", showGrid);
    }, [fullScreen, showGrid]);

    const audioPlayerRef = useRef(null);
    const memoizedSlider = useMemo(
        () => (
            <>
                <Splide
                    ref={ref}
                    className={s.splide}
                    // hasTrack={false}
                    // autoPlay={false}
                    options={{
                        type: "loop",
                        pagination: false,
                        arrows: false,
                        // autoplay: autoPlay,
                        rewind: autoPlay,
                        classes: {
                            page: cn("splide__pagination__page", s.splidePage),
                        },
                    }}
                >
                    {/* <div className={cn("flex w-full h-full", s.splideTrack)}>
            <SplideTrack> */}
                    {galleryImages.map((image: string, index: number) => (
                        <SplideSlide key={uuid()}>
                            <div key={uuid()} className="flex flex-col">
                                <Image
                                    src={image}
                                    alt={image}
                                    className={s.image}
                                    objectFit="contain"
                                    objectPosition={"center"}
                                />
                                <span data-active={`${showCaption}`} className={cn(s.caption)}>
                  Hello I am a Caption
                                    {/* </div> */}
                </span>
                            </div>
                        </SplideSlide>
                    ))}
                    {/* </SplideTrack>
          </div> */}
                </Splide>
            </>
        ),
        [autoPlay, ref, showCaption]
    );

    return (
        <div ref={containerRef} className={cn(s.container, "debus")}>
            <div data-hidden={`${!expandControls}`} className={cn(s.controls)}>
                {/* <Button
          icon
          data-hidden={`${!expandControls}`}
          // data-hidden={`${!expandControls}`}
          className={cn(s.controlButton, s.closeButton)}
          onClick={() => closeModal()}
        >
          <AiOutlineClose className={"text-white"} />
        </Button> */}
                <Tooltip
                    right={!expandControls}
                    message={expandControls ? "Hide Menu" : "Show Menu"}
                >
                    <Button
                        icon
                        data-hidden={`${!expandControls}`}
                        className={cn(s.expandButton, s.controlButton)}
                        onClick={() => setExpandControls((prev) => !prev)}
                    >
                        <BsChevronRight
                            className={cn({["rotate-180"]: !expandControls}, "text-white")}
                        />
                    </Button>
                </Tooltip>
                <div
                    data-hidden={`${!expandControls}`}
                    className={cn(" flex flex-row justify-evenly h-fit", s.mainControls)}
                >
                    <Tooltip message={"Show/Hide Thumbnails"}>
                        <Button
                            icon
                            className={cn(s.controlButton, s.gridButton)}
                            onClick={() => toggleGrid()}
                        >
                            <BsGrid3X3GapFill/>
                        </Button>
                    </Tooltip>
                    <Tooltip message={"Toggle Fullscreen"}>
                        <Button
                            icon
                            data-hidden={`${!expandControls}`}
                            className={cn(s.controlButton, s.fullScreen)}
                            onClick={() => {
                                toggleFullScreen();
                                setExpandControls(false);
                            }}
                        >
                            {fullScreen ? <RiFullscreenExitLine/> : <RiFullscreenLine/>}
                        </Button>
                    </Tooltip>

                    <Tooltip message={"Toggle Captions"}>
                        <Button
                            icon
                            className={cn(s.controlButton, s.borderLeft)}
                            onClick={() => setCaption((prev) => !prev)}
                        >
                            <BsFillInfoCircleFill/>
                        </Button>
                    </Tooltip>
                    <Tooltip message={autoPlay ? "Pause" : "Auto play"}>
                        <Button
                            icon
                            className={cn(s.controlButton)}
                            onClick={() => toggleAutoPlay()}
                        >
                            {autoPlay ? <FaPause/> : <FaPlay/>}
                        </Button>
                    </Tooltip>
                    <AudioPlayer
                        src={"/audio/amazing-grace.mp3"}
                        autoplay
                        renderPlayer={({isPlaying, play, pause}) => (
                            <Tooltip message={playMusic ? "Play audio" : "Pause audio"}>
                                <Button
                                    icon
                                    className={cn(s.controlButton, s.borderRight)}
                                    onClick={() => (isPlaying ? pause() : play())}
                                >
                                    {!isPlaying ? <BsFillVolumeMuteFill/> : <BsVolumeUpFill/>}
                                </Button>
                            </Tooltip>
                        )}
                    />
                    <Tooltip right message={"Share on Instagram"}>
                        <Button
                            icon
                            className={cn(s.controlButton)}
                            // onClick={() => setExpandControls((prev) => !prev)}
                        >
                            <FaInstagram/>
                        </Button>
                    </Tooltip>
                    <Tooltip right message={"Share on Facebook"}>
                        <Button
                            icon
                            className={cn(s.controlButton)}
                            // onClick={() => setExpandControls((prev) => !prev)}
                        >
                            <FaFacebookSquare/>
                        </Button>
                    </Tooltip>
                    <Tooltip right message={"Share on Twitter"}>
                        <Button
                            icon
                            className={cn(s.controlButton)}
                            onClick={() => setExpandControls((prev) => !prev)}
                        >
                            <FaTwitter/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className={cn(s.view)}>
                {memoizedSlider}
                <div className={cn(s.directionControls)}>
                    <Button icon className={cn(s.button)} onClick={() => prevImage()}>
                        <BsChevronLeft className={cn("transition-all text-white")}/>
                    </Button>
                    <Button icon className={cn(s.button)} onClick={() => nextImage()}>
                        <BsChevronRight className={cn("transition-all  text-white")}/>
                    </Button>
                </div>
                {/* <div className="flex flex-row items-center relative"> */}
                <div className={cn(s.pagination)} id="pagination"></div>
            </div>
            <div
                data-active={`${showGrid}-${fullScreen}`}
                className={cn(s.thumbnails)}
            >
                {/* <Button
          icon
          className={cn(s.closeGridButton, s.gridButton)}
          onClick={() => toggleGrid()}
        >
          <AiOutlineClose />
        </Button> */}
                <Splide
                    ref={thumbnailRef}
                    className={cn("w-full mt-4", s.splideThumbnails)}
                    // autoPlay={false}
                    options={{
                        type: "slide",
                        arrows: true,
                        rewind: true,
                        pagination: false,
                        fixedWidth: 80,
                        fixedHeight: 80,
                        cover: true,
                        focus: "center",
                        isNavigation: true,
                        breakpoints: {
                            500: {
                                perPage: 1,
                            },
                            800: {
                                perPage: 2,
                            },
                            1000: {
                                perPage: 3,
                            },
                            1500: {
                                perPage: 4,
                            },
                            1800: {
                                perPage: 8,
                            },
                            3000: {
                                perPage: 8,
                            },
                        },
                    }}
                >
                    {galleryImages.map((image, index) => (
                        <SplideSlide key={uuid()}>
                            <Image
                                src={image}
                                alt={image}
                                key={uuid()}
                                className={s.thumbnail}
                                objectFit="cover"
                                objectPosition={"center"}
                                onClick={() => {
                                }}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
                <div className={s.thumbnailMarquee}>
                    {galleryImages.map((image, index) => (
                        <Image
                            src={image}
                            alt={image}
                            onClick={() => {
                                selectMarqueeItem(index);
                            }}
                            key={uuid()}
                            className={s.marqueeItem}
                            objectFit="cover"
                            objectPosition={"center"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FlipBook;
