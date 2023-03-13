import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import throttle from "lodash.throttle";
import {Button} from "@components/ui/common";
import cn from "classnames";
import audio from "./index.module.css";
import ErrorBoundary from "@lib/error-boundaries/component-boundary";
import {BsFillSkipBackwardFill, BsFillSkipForwardFill, BsPauseFill, BsPlayFill,} from "react-icons/bs";

type Props = {
    headless?: boolean;
    src?: string;
    loop?: boolean;
    autoplay?: boolean;
};
const Audio = React.forwardRef(
    (
        {
            src = "/audio/dirge-flute.mp3",
            headless = false,
            loop = false,
            autoplay = false,
        }: Props,
        ref
    ) => {
        useImperativeHandle(ref, () => ({
            playMedia: () => {
                if (innerRef.current !== null) {
                    if (isPlaying) {
                        innerRef.current.pause();
                        setIsPlaying(false);
                    } else {
                        innerRef.current.play();
                        setIsPlaying(true);
                    }
                }
            },
            play: () => {
                if (innerRef.current !== null) {
                    if (!isPlaying) {
                        innerRef.current.play();
                        setIsPlaying(true);
                    }
                }
            },
            pause: () => {
                if (innerRef.current !== null) {
                    if (isPlaying) {
                        innerRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            },
        }));
        const innerRef = useRef<HTMLAudioElement>(null);
        // let isPlaying = false;
        const [isPlaying, setIsPlaying] = useState(false);
        const [currentPosition, setCurrentPosition] = useState(0.0);
        const [volume, setVolume] = useState(50);

        function generateRandom(min = 0, max = 100) {
            // find diff
            let difference = max - min;

            // generate random number
            let rand = Math.random();

            // multiply with difference
            rand = Math.floor(rand * difference);

            // add with min value
            rand = rand + min;

            return rand;
        }

        // }, [isPlaying]);
        useEffect(() => {
            try {
                if (autoplay) {
                    if (innerRef.current !== null) {
                        if (!isPlaying) {
                            setIsPlaying(true);
                        }
                        innerRef.current.play();
                    }
                }
            } catch (e) {
            }
        }, []);
        useEffect(() => {
            const updateposition = throttle(() => {
                if (innerRef.current !== null) {
                    setCurrentPosition(
                        (innerRef.current.currentTime / innerRef.current.duration) * 100
                    );
                }
            }, 100);
            if (innerRef.current !== null) {
                innerRef.current.addEventListener("timeupdate", updateposition);
            }
            return () => {
                if (innerRef.current !== null) {
                    innerRef.current.removeEventListener("timeupdate", updateposition);
                    innerRef.current.pause();
                }
            };
        }, [innerRef.current]);
        useEffect(() => {
            if (innerRef.current !== null && loop) {
                innerRef.current.loop = true;
                innerRef.current.addEventListener(
                    "ended",
                    () => {
                        if (isPlaying) {
                            innerRef.current?.pause();
                            setIsPlaying(false);
                        } else {
                            innerRef.current?.play();
                            setIsPlaying(true);
                        }
                    },

                    false
                );
            }
            return () => {
                if (innerRef.current !== null) {
                    innerRef.current.removeEventListener("ended", () => {
                        if (isPlaying) {
                            innerRef.current?.pause();
                            setIsPlaying(false);
                        } else {
                            innerRef.current?.play();
                            setIsPlaying(true);
                        }
                    });
                    innerRef.current.pause();
                }
            };
        }, [loop]);
        // for (let i = 1; i <= 6; i++) {
        //   const item = document.querySelector(`#bar-${1}`);
        //   item?.classList.remove(`equalizer-bar-${i}`);
        // }
        if (headless)
            return (
                <audio ref={innerRef}>
                    <source src={src} type="audio/mpeg"/>
                </audio>
            );
        return (
            <>
                <ErrorBoundary>
                    <div className={cn(audio.root)}>
                        <audio ref={innerRef} autoPlay={autoplay}>
                            <source src={src} type="audio/mpeg"/>
                        </audio>
                        <div className={audio.controlBox}>
                            <div className={audio.equalizer}>
                                {(() => {
                                    const bars = [];
                                    for (let i = 1; i <= 6; i++) {
                                        const style = {
                                            // "--scale": generateRandom(50, 100) / 100,
                                            "--timing": `${generateRandom(95, 100) / 100}s`,
                                        } as React.CSSProperties;
                                        bars.push(<div className={audio.bar} style={style}/>);
                                    }
                                    return bars;
                                })()}
                            </div>
                            <div className="flex flex-row items-center gap-10 w-full my-5">
                                <input
                                    type="range"
                                    className={cn(audio.track, "w-full")}
                                    min="0"
                                    max="100"
                                    value={currentPosition}
                                    // onChange={(event) => {
                                    //   innerRef.current?.currentTime = parseFloat(
                                    //     (event.target.value / 100) * innerRef.current.duration
                                    //   );
                                    //   setCurrentPosition(parseFloat(event.target.value));
                                    // }}
                                    id="myRange"
                                />
                            </div>
                            <div className={audio.control}>
                                <Button icon>
                                    <BsFillSkipBackwardFill/>
                                </Button>
                                <Button
                                    icon
                                    onClick={() => {
                                        if (innerRef.current !== null) {
                                            if (isPlaying) {
                                                innerRef.current.pause();
                                                setIsPlaying(false);
                                            } else {
                                                innerRef.current.play();
                                                setIsPlaying(true);
                                            }
                                        }
                                    }}
                                >
                                    {isPlaying ? <BsPauseFill/> : <BsPlayFill/>}
                                </Button>
                                <Button icon>
                                    <BsFillSkipForwardFill/>
                                </Button>
                                <input
                                    type="range"
                                    className={cn(audio.track, "w-4/12")}
                                    min="0"
                                    max="100"
                                    value={volume}
                                    // onChange={(event) => {
                                    //   innerRef.current?.volume =
                                    //     parseFloat(event.target.value) / 100;
                                    //   setVolume(parseFloat(event.target.value));
                                    // }}
                                    id="myRange"
                                />
                            </div>
                        </div>
                    </div>
                </ErrorBoundary>
            </>
        );
    }
);
Audio.displayName = "audioPlayer";
export default Audio;
