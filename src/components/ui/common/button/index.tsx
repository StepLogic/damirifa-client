import cn from "classnames";
import React, { ButtonHTMLAttributes, JSXElementConstructor } from "react";

import s from "./index.module.css";
import LoadingDots from "../loading-dots";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  placement?: "dashboard" | "normal";
  variant?: "primary" | "secondary" | "icon" | "white";
  size?: "lg" | "md" | "sm";
  outline?: boolean;
  pill?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    className,
    variant = "primary",
    children,
    width,
    size,
    pill,
    outline,
    label,
    loading = false,
    disabled = false,
    placement = "normal",
    style = {},
    icon = false,
    Component = "button",
    ...rest
  } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
      [s.white]: variant === "white",
      [s.icon]: icon,
      [s.md]: size === "md",
      [s.lg]: size === "lg",
      [s.sm]: size === "sm",
      [s.outline]: outline,
      [s.pill]: pill,
      [s.loading]: loading,
      [s.disabled]: disabled,
      [s.normalStyle]: placement === "normal",
      [s.dashboardStyle]: placement === "dashboard",
    },
    className
  );

  return (
    <Component
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {loading ? (
        <i className="ps-2 d-flex">
          <LoadingDots />
        </i>
      ) : label ? (
        <span>{label}</span>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
