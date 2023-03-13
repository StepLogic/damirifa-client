"use client"
import React, {
  forwardRef,
  FunctionComponent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import s from "./index.module.css";
import cn from "classnames";
import { RefObject } from "react";
import ReactNode from "react";
import { uuid } from "@lib/Utils";

interface Props {
  instance?: Function;
  children?: React.ReactNode;

  className?: string;
  // ref: RefObject<WizardRef>;
}

export type WizardRef = {
  goToStep: Function;
  goToNamedStep: Function;
};
export type TabProps = {
  name: string;
  children?: React.ReactNode;
};
const TabPane: FunctionComponent<Props> & {
  Tab: FunctionComponent<TabProps>;
} = (props) => {
  const { children, className } = props;
  const [active, setActive] = useState<number>(0);
  const stepNames = useRef<string[]>([]);
  const historyRef = useRef<number[]>([]);

  const maxStep = React.Children.count(children);

  const goToStep = (step: number) => {
    if (step >= 0 && step <= maxStep - 1) {
      setActive((prev) => {
        return step;
      });
    } else {
      console.warn("No Step ");
    }
  };
  const goToNamedStep = (step: string) => {
    const index = stepNames.current.findIndex((_step) => step === _step);
    // console.log("wizard.named.step", index, step, stepNames);
    if (index) {
      setActive((prev) => {
        return index;
      });
    }
  };
  const setupChildren = () => {
    const childrenWithProps = React.Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
        if (!stepNames.current.includes(child.props.name))
          stepNames.current.push(child.props.name);
        const Wrapper = React.createElement(
          "div",
          {
            "data-step": `${i}`,
            "data-active": `${active === i}`,
            "data-orgin": `${active}`,
            className: cn("", s.wizard, child.props.className, {}),
          },
          React.cloneElement(child)
        );
        return Wrapper;
      }
    });
    return childrenWithProps;
  };
  const getTabNames = () => {
    const childrenWithProps = React.Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
        return child.props.name;
      }
    });
    return childrenWithProps;
  };

  return (
    <div className={cn(s.root, className)}>
      <ul className={s.tabBar}>
        {getTabNames()?.map((_, i) => (
          <li
            data-active={`${active === i}`}
            role={"button"}
            tabIndex={-1}
            key={uuid()}
            onClick={() => setActive(i)}
          >
            <p> {_}</p>
          </li>
        ))}
      </ul>
      <div className="block pt-[26px]">{setupChildren()}</div>
    </div>
  );
};
const Tab = (props: TabProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
TabPane.Tab = Tab;

export default TabPane;
