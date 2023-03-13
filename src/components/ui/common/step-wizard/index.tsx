import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState,} from "react";
import cn from "classnames";
import s from "./index.module.css";

export interface StepperProps {
    instance: Function;
    nextStep: Function;
    previousStep: Function;
    goToStep: Function;
}

export interface StepperRef {
    // instance: Function;
    nextStep: Function;
    previousStep: Function;
    goToStep: Function;
}

interface Props {
    children?: React.ReactNode;
    noScrollUp?: boolean;
}

const StepWizard = forwardRef<StepperRef, Props>((props, ref) => {
    const {children, noScrollUp = false} = props;
    const [active, setActive] = useState<number>(0);
    const maxStep = React.Children.count(children);
    const previousStepNumber = useRef<number>(0);
    const nextStep = () => {
        setActive((prev) => (prev < maxStep - 1 ? prev + 1 : prev));
        if (!noScrollUp) {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // for smoothly scrolling
            });
        }
    };
    const previousStep = () => {
        setActive((prev) => (prev > 0 ? prev - 1 : prev));
        if (!noScrollUp) {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // for smoothly scrolling
            });
        }
    };
    const goToStep = (step: number) => {
        if (step >= 0 && step <= maxStep - 1) {
            console.warn("Step ", step, maxStep);
            setActive(step);
            if (!noScrollUp) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth", // for smoothly scrolling
                });
            }
        } else {
            console.warn("No Step ", step, maxStep);
        }
    };
    useImperativeHandle(ref, () => ({
        nextStep,
        previousStep,
        goToStep,
    }));
    useEffect(() => {
        previousStepNumber.current = active;
    }, [active]);
    const childrenWithProps = React.Children.map(children, (child, i) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (React.isValidElement(child)) {
            const Wrapper = React.createElement(
                "div",
                {
                    "data-step": `${i}`,

                    "data-next": `${i > previousStepNumber.current}`,
                    "data-previous": `${i < previousStepNumber.current}`,
                    className: cn("w-full", {
                        [s.active]: i == active,
                        [s.notActive]: i !== active,
                        // [s.slideLeft]: previousStepNumber.current > active,
                        // [s.slideRight]: previousStepNumber.current < active,
                    }),
                },
                React.cloneElement(child, {nextStep, previousStep, goToStep})
            );
            return Wrapper;
        }
    });

    return (
        <div className={cn("w-full  overflow-hidden", s.root)}>
            {childrenWithProps}
        </div>
    );
});
StepWizard.displayName = "StepWizard";
// const Header: React.FC<StepperProps> = ({ children }) => {
//   return <div>{children}</div>;
// };
// StepWizard.Header = Header;
export default StepWizard;
