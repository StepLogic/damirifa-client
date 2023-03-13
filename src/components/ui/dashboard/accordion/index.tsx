
"use client"
import { ClickOutside, Collapse } from "@components/ui/common";
import cn from "classnames";
import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

import s from "./index.module.css";
import { uuid } from "@lib/Utils";

interface AccordionProps {
  className?: string;
  expand?: boolean;
  Body?: React.ReactNode;
  Header?: React.ReactNode;
  id?: string;
  collapseOnClickOutside?: boolean;
}

interface AccordionHeaderProps {
  className?: string;
  show?: boolean;
  toggle?: Function;
}

interface AccordionBodyProps {
  className?: string;
  show?: boolean;
  toggle?: Function;
  collapseBehavior?: "scale" | "hidden";
}

type Child = React.ReactElement & {
  show: boolean;
  toggle: Function;
};
const Accordion: FunctionComponent<AccordionProps> & {
  Body: FunctionComponent<AccordionBodyProps>;
  Header: FunctionComponent<AccordionHeaderProps>;
} = (props) => {
  const {
    children,
    className,
    collapseOnClickOutside = false,
    expand = false,
    id,
    ...rest
  } = props;

  const [show, toggle] = useState<boolean>(expand);
  const ref = useRef<HTMLDivElement>(null);
  // const event = new CustomEvent("toggle", { id: id });
  const toggleAccordion = (value: boolean) => {
    toggle(value);
    if (id) sessionStorage.setItem(`state-${id}`, String(value));
  };
  useEffect(() => {
    toggleAccordion(expand);
  }, [expand]);
  useEffect(() => {
    if (id) toggle(sessionStorage.getItem(`state-${id}`) === "true");
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as Child, {
        toggle: toggleAccordion,
        show: show,
      });
    }
    return child;
  });
  return (
    <ClickOutside
      active={show}
      onClick={() => (collapseOnClickOutside ? toggleAccordion(false) : null)}
    >
      <div ref={ref} className={cn(s.root, className)} {...rest}>
        {childrenWithProps}
      </div>
    </ClickOutside>
  );
};
const Header: React.FC<AccordionHeaderProps> = (props) => {
  const { children, toggle, show, className, ...rest } = props;
  return (
    <div
      {...rest}
      data-expand={`${show}`}
      onClick={() => {
        // console.log("dashboard.announcement.accordion", props);
        toggle && toggle(!show);
      }}
      className={cn(s.header, className)}
    >
      {children}
      <BsChevronDown data-expand={`${show}`} className={s.caret} />
    </div>
  );
};
const Body: React.FC<AccordionBodyProps> = (props) => {
  const {
    show,
    className,
    toggle,
    children,
    collapseBehavior = "hidden",
  } = props;
  return (
    <Collapse collapseBehavior={collapseBehavior} isOpen={show}>
      <div
        data-expand={`${show}`}
        className={cn(s.body, className, {
          [s.hideOnActive]: collapseBehavior === "hidden",
        })}
      >
        {children}
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    toggle && toggle(false);*/}
        {/*  }}*/}
        {/*  className={s.collapseLink}*/}
        {/*>*/}
        {/*  collapse*/}
        {/*</button>*/}
      </div>
    </Collapse>
  );
};
Accordion.Body = Body;
Accordion.Header = Header;
export default Accordion;
