import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState,} from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
    instance?: Function;
    children?: React.ReactNode;
    id: string;
    className?: string;
}

export type WizardRef = {
    nextStep: Function;
    previousStep: Function;
    goToStep: Function;
    goToNamedStep: Function;
    goBack?: Function;
};
export type WizardChildRef = {
    goBack?: Function;
    nextStep?: Function;
    previousStep?: Function;
    goToStep?: Function;
    goToNamedStep?: Function;
    name?: string;
};
const Wizard = forwardRef<WizardRef, Props>((props, ref) => {
    const {children, instance, className, id} = props;
    const [active, setActive] = useState<number>(0);
    const stepNames = useRef<string[]>([]);
    const historyRef = useRef<number[]>([]);
    useImperativeHandle(ref, () => ({
        nextStep,
        previousStep,
        goToStep,
        goToNamedStep: goToNamedStep,
        goBack: goBack,
    }));
    const maxStep = React.Children.count(children);
    useEffect(() => {
        const b = sessionStorage.getItem(id);
        if (b !== null) {
            const c = JSON.parse(b);
            // console.log("persisit.wizard", id, Number(c.active));
            setActive(Number(c.active));
        }
    }, []);

    const nextStep = () => {
        setActive((prev) => {
            const newStep = prev < maxStep - 1 ? prev + 1 : prev;
            historyRef.current.push(prev);
            sessionStorage.setItem(id, JSON.stringify({active: newStep}));
            return newStep;
        });
        // window.scrollTo({
        //   top: 0,
        //   behavior: "smooth", // for smoothly scrolling
        // });
    };
    const previousStep = () => {
        setActive((prev) => {
            const newStep = prev > 0 ? prev - 1 : prev;
            historyRef.current.push(prev);
            sessionStorage.setItem(id, JSON.stringify({active: newStep}));
            return newStep;
        });
        // window.scrollTo({
        //   top: 0,
        //   behavior: "smooth", // for smoothly scrolling
        // });
    };
    const goToStep = (step: number) => {
        if (step >= 0 && step <= maxStep - 1) {
            setActive((prev) => {
                historyRef.current.push(prev);
                sessionStorage.setItem(id, JSON.stringify({active: step}));
                return step;
            });
            // window.scrollTo({
            //   top: 0,
            //   behavior: "smooth", // for smoothly scrolling
            // });
        } else {
            console.warn("No Step ");
        }
    };
    const goToNamedStep = (step: string) => {
        const index = stepNames.current.findIndex((_step) => step === _step);
        // console.log("wizard.named.step", index, step, stepNames);
        if (index) {
            setActive((prev) => {
                historyRef.current.push(prev);
                sessionStorage.setItem(id, JSON.stringify({active: index}));
                return index;
            });
        }
    };
    const goBack = () => {
        // console.log("wizard.history.before", historyRef.current);
        const lastIndex = historyRef.current.pop();
        // console.log("wizard.history.after", historyRef.current);
        // console.log("wizard.history.last.child", lastIndex);
        if (lastIndex) {
            setActive((b) => {
                sessionStorage.setItem(id, JSON.stringify({active: lastIndex}));
                return lastIndex;
            });
            return false;
        } else {
            setActive((b) => {
                sessionStorage.setItem(id, JSON.stringify({active}));
                return 0;
            });
            if (active === 0) return true;
            return false;
        }
    };

    useEffect(() => {
        // const back = (event: Event) => {
        //   console.log("wizard.back.clicked", event, history.current, active);
        //   const step = history.current.pop();
        //   console.log("wizard.history", step);
        //   if (history.current.length > 0) {
        //     setActive(step);
        //     event.preventDefault;
        //   } else {
        //     window.history.back();
        //   }
        // };
        // console.log("wizard.popstate.mounted");
        // window.history.pushState({}, "");
        // window.addEventListener("popstate", back);
        // return () => window.removeEventListener("popstate", back);
    }, []);
    const setupChildren = () => {
        const childrenWithProps = React.Children.map(children, (child, i) => {
            // Checking isValidElement is the safe way and avoids a typescript
            // error too.
            if (React.isValidElement(child)) {
                // setStepName((current) => {
                //   current.push(child.props.name);
                //   return current;
                // });
                if (!stepNames.current.includes(child.props.name))
                    stepNames.current.push(child.props.name);
                const Wrapper = React.createElement(
                    "div",
                    {
                        "data-step": `${i}`,
                        "data-active": `${active === i}`,
                        "data-orgin": `${active}`,
                        className: cn("", s.wizard, child.props.className, {
                            // [s.active]: i == active,
                            // [s.notActive]: i !== active,
                            // [s.slideLeft]: previousStepNumber.current > active,
                            // [s.slideRight]: previousStepNumber.current < active,
                        }),
                    },
                    React.cloneElement(child, {
                        nextStep,
                        previousStep,
                        goToNamedStep,
                        goToStep,
                        goBack,
                    })
                );
                return Wrapper;
            }
        });
        // setStepName(stepNames);
        return childrenWithProps;
    };

    return <div className={cn(s.root, className)}>{setupChildren()}</div>;
});
Wizard.displayName = "Wizard";

export default Wizard;
