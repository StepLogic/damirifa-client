import cn from "classnames";
import React, {
  forwardRef,
  HTMLAttributes,
  JSXElementConstructor,
  useRef,
  useEffect,
  useState,
} from "react";

import s from "./index.module.css";
import LoadingDots from "../loading-dots";
import Button from "../button";
import { AiOutlineClose } from "react-icons/ai";
import ClickOutside from "../click-outside";
type Props = {
  className?: string;
  variant?: "dropdown" | "search" | "default";
  size?: "lg" | "md" | "sm";
  show?: boolean;
  toggle?: Function;
  x?: "left" | "left-half" | "right" | "right-half" | "center";
} & HTMLAttributes<HTMLDivElement>;
type ItemProps = {
  className?: string;
  toggle?: Function;
  show?: boolean;
} & HTMLAttributes<HTMLLIElement>;

function Dropdown({ children, className, show, toggle }: Props) {
  const rootClassName = cn(s.root, className);
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { toggle, show });
    }
    return child;
  });
  return (
    <ClickOutside
      active={show || false}
      onClick={() => {
        if (toggle) {
          toggle(false);
        }
      }}
    >
      <div className={rootClassName}>{childrenWithProps}</div>
    </ClickOutside>
  );
}
function Toggle({ children, toggle, show }: Props) {
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: () => toggle && toggle(!show),
        show,
      });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
}
function Menu({
  children,
  className,
  variant,
  size,
  toggle,
  show,
  x = "center",
}: Props) {
  const ref = useRef(null);
  useEffect(() => {}, [ref]);
  const rootClassName = cn(
    s.menu,
    {
      [s.lg]: size === "lg",
      [s.md]: size === "md",
      [s.sm]: size === "sm",
      [s.dropdown]: variant === "dropdown",
      [s.search]: variant === "search",
      [s.default]: variant === "default",
      [s.open]: show,
      [s.center]: x == "center",
      [s.left]: x == "left",
      [s.right]: x == "right",
      [s.leftHalf]: x == "left-half",
      [s.rightHalf]: x == "right-half",
    },
    className
  );
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      // console.log("Childrend", child);
      return React.cloneElement(child, {
        toggle,
        show,
      });
    }
    return child;
  });
  // console.log("React", childrenWithProps);
  return (
    <div ref={ref} className={rootClassName}>
      <Button
        className={cn(s.closeButton, "")}
        variant="primary"
        icon={true}
        size="sm"
        onClick={() => toggle && toggle(false)}
      >
        <AiOutlineClose />
      </Button>
      <ul className={s.menuList}>{childrenWithProps}</ul>
    </div>
  );
}
function Item({ children, className, toggle, show, ...rest }: ItemProps) {
  const rootClassName = cn(s.item, className);
  const handleClick = () => {
    console.log("hello", toggle);
    toggle && toggle(false);
  };
  return (
    <li className={rootClassName} onClick={handleClick} {...rest}>
      {children}
    </li>
  );
}
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
