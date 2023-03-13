/**
 *Project:damirifa
 *File:audio-player
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import React, {RefObject, useEffect, useReducer, useRef,} from "react";

export type Controls = {
    play: () => void;
    pause: () => void;
    timeStampPercent: number;
    timeStampFormatted: string;
    durationFormatted: string;
    timeStamp: number;
    updateVolume: (value: number) => void;
    volume: number;
    audioRef: RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    src: string;
};
type Props = {
    className?: string;
    src: string;
    renderPlayer?: (controls: Controls) => {};
    autoplay?: boolean;
    loop?: boolean;
};

enum ActionType {
    TIMESTAMP,
    VOLUME,
    PAUSE,
    PLAY,
    CLEAR,
}

type State = {
    timestamp: number;
    volume: number;
    isPlaying: boolean;
};

const AudioPlayer = (props: Props) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const {className, src, renderPlayer, autoplay, loop = true} = props;

    const initialState: State = {
        timestamp: 0.0,
        volume: 0.5,
        isPlaying: false,
    };

    function reducer(state: State, action: any) {
        switch (action.type) {
            case ActionType.TIMESTAMP:
                // console.log("timestamp", action.payload.timestamp);
                return {
                    ...state,
                    timestamp: action.payload.timestamp,
                };
            case ActionType.VOLUME:
                return {
                    ...state,
                    volume: action.payload.volume,
                };
            case ActionType.PLAY:
                return {
                    ...state,
                    isPlaying: true,
                };
            case ActionType.PAUSE:
                audioRef.current?.pause();
                return {
                    ...state,
                    isPlaying: false,
                };
            case ActionType.CLEAR:
                audioRef.current?.pause();
                return {
                    timestamp: 0.0,
                    volume: 0.5,
                    isPlaying: false,
                };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const play = () => {
        audioRef.current
            ?.play()
            .then((r) => dispatch({type: ActionType.PLAY}))
            .catch((err) => console.warn("audioPlayer.play.error", err));
    };
    const pause = () => {
        dispatch({type: ActionType.PAUSE});
    };
    const setVolume = (value: number) => {
        dispatch({type: ActionType.VOLUME, payload: {volume: value}});
    };
    const clear = () => {
        dispatch({type: ActionType.CLEAR});
    };
    const getDuration = () => {
        return audioRef.current?.duration || 1;
    };
    const formatTimestamp = (x: number, y: number) => {
        const quotient = Math.floor(y / x);
        const remainder = y % x;
        return `${quotient}:${remainder}`;
    };
    useEffect(() => {
        autoplay && play();
        if (loop && audioRef.current !== null) audioRef.current.loop = loop;
        return () => {
            // pause();
        };
    }, []);
    // add listeners
    useEffect(() => {
        const updatePosition = () => {
            dispatch({
                type: ActionType.TIMESTAMP,
                payload: {timestamp: audioRef.current?.currentTime},
            });
        };
        audioRef.current?.addEventListener("timeupdate", updatePosition);
        audioRef.current?.addEventListener("ended", clear);

        return () => {
            audioRef.current?.removeEventListener("timeupdate", updatePosition);
            audioRef.current?.addEventListener("ended", clear);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src={src}/>
            {renderPlayer &&
                renderPlayer({
                    timeStamp: state.timestamp as number,
                    play: play,
                    pause: pause,
                    timeStampPercent: (state.timestamp / getDuration()) * 100,
                    timeStampFormatted: `${Math.floor(state.timestamp / 60)}:${String(
                        Math.round(state.timestamp % 60)
                    ).padStart(2, "0")}`,
                    durationFormatted: formatTimestamp(state.timestamp, 60),
                    updateVolume: setVolume,
                    volume: state.volume,
                    audioRef: audioRef,
                    isPlaying: state.isPlaying,
                    src: src,
                })}
        </>
    );
};

export default AudioPlayer;
