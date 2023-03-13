import React, { ButtonHTMLAttributes, JSXElementConstructor } from "react";
import s from "./index.module.css";
import cn from "classnames";
import Tooltip from "../tooltip";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "dark" | "default";
  variant?: "outline" | "fill" | "icon" | "default";
  pill?: Boolean;
  label?: String;
  Component?: string | JSXElementConstructor<any>;
  className?: string;
  size?: "sm100" | "md100" | "md200" | "lg100" | "xl100";
  square?: boolean;
  showTooltip?: string;
}

const Button: React.FC<Props> = (props) => {
  const {
    className,
    variant = "primary",
    children,
    pill,
    label,
    size = "md",
    square = false,
    color = "primary",
    Component = "button",
    showTooltip,
    disabled,
    ...rest
  } = props;
  return (
    <Component
      {...rest}
      disabled={disabled}
      className={cn(
        s.root,
        {
          [s.primary]: color === "primary",
          [s.secondary]: color === "secondary",
          [s.dark]: color === "dark",
          [s.icon]: variant === "icon",
          [s.default]: variant === "default",
          [s.default]: variant === "default",
          [s.fill]: variant === "fill",
          [s.md100]: size === "md100",
          [s.md200]: size === "md200",
          [s.lg100]: size === "lg100",
          [s.sm100]: size === "sm100",
          [s.outline]: variant === "outline",
          [s.disabled]: disabled,
          [s.square]: square,
          [s.pill]: pill,
        },
        className
      )}
    >
      {showTooltip ? (
        <Tooltip message={showTooltip}>
          {children}
          {label && <span>{label}</span>}
        </Tooltip>
      ) : (
        <>
          {children}
          {label && <span>{label}</span>}
        </>
      )}
    </Component>
  );
};

export default Button;
