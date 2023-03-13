import React, {ChangeEvent} from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
    variant?: "inner-slider" | "outer-slider" | "overflow-slider";
    color?: "primary" | "secondary" | "dark";
    onChange?: Function;
}

const Switch: React.FC<Props> = (props) => {
    const {variant = "inner-slider", color = "primary", onChange} = props;
    return (
        <label
            className={cn(s.root, {
                [s.primary]: color === "primary",
                [s.secondary]: color === "secondary",
                [s.overflowSlider]: color === "dark",
                [s.innerSlider]: variant === "inner-slider",
                [s.outerSlider]: variant === "outer-slider",
                [s.overflowSlider]: variant === "overflow-slider",
            })}
        >
            <input
                type="checkbox"
                className={s.input}
                onChange={(e: ChangeEvent) => onChange && onChange(e.target.checked)}
            />
            <div className={s.track}>
                <span className={cn(s.slider, {})}></span>
            </div>
        </label>
    );
};

export default Switch;
