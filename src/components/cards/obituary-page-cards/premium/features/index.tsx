import React, {HTMLAttributes} from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
    backgroundImageSrc: string;
    svgOverlaySrc: string;
    label: string;
}

const Feature: React.FC<Props> = (props) => {
    const {svgOverlaySrc, className, backgroundImageSrc, label, ...rest} =
        props;
    return (
        <div
            {...rest}
            className={cn(s.root, className)}
            style={{
                background: `url('${backgroundImageSrc}')`,
                backgroundSize: "cover",
            }}
        >
            <div className={s.overlay}>
                <svg className={s.svg}>
                    <image xlinkHref={svgOverlaySrc}/>
                </svg>
                <span>{label}</span>
            </div>
        </div>
    );
};

export default React.memo(Feature);
