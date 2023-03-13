import React from "react";
import cn from "classnames";
import s from "./index.module.css";

export interface Props {
    message?: string;
    isLink?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    popUp?: boolean;
    render?: Function;
}

const Tooltip: React.FC<Props> = (props) => {
    const {
        children,
        message,
        isLink = false,
        left = false,
        right = false,
        top = false,
        bottom = true,
        popUp = false,
        render,
    } = props;
    return (
        <>
            <div className={cn(s.root)} tabIndex={0}>
                {children}
                {popUp ? (
                    <div
                        className={cn(s.overlay, {
                            [s.top]: top,
                            [s.left]: left,
                            [s.right]: right,
                            [s.bottom]: bottom,
                            [s.popUp]: popUp,
                        })}
                    >
                        <div className={cn({[s.popUpContainer]: popUp})}>
                            {render ? render() : <></>}
                        </div>
                    </div>
                ) : (
                    <div
                        className={cn(s.overlay, s.tip, {
                            [s.top]: top,
                            [s.left]: left,
                            [s.right]: right,
                            [s.bottom]: bottom,
                        })}
                    >
                        <span>{message}</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tooltip;
