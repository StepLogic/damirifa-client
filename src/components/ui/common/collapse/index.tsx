import cn from "classnames";
import React, {FC, ReactNode, useEffect, useRef, useState,} from "react";
import s from "./index.module.css";

export interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    closeToFraction?: number;
    className?: string;
    collapseBehavior?: "scale" | "hidden";
}

const Collapse: FC<Props> = ({
                                 children,
                                 className,
                                 isOpen,
                                 closeToFraction = 0,
                                 collapseBehavior = "scale",
                             }) => {
    const rootClassName = cn(s.root, {
        [s.open]: isOpen,
    });
    const ref = useRef<HTMLDivElement>(null);
    const [scrollHeight, setScrollHeight] = useState<number>(0);
    useEffect(() => {
        if (ref.current !== null) {
            setScrollHeight(ref.current.scrollHeight);
        }
    }, [isOpen]);
    return (
        <div
            className={cn(rootClassName, className)}
            style={
                collapseBehavior === "scale"
                    ? {
                        maxHeight: `${
                            isOpen ? scrollHeight : closeToFraction * scrollHeight
                        }px`,
                    }
                    : {
                        display: isOpen ? "block" : "none",
                        height: "auto",
                    }
            }
            ref={ref}
            aria-expanded={isOpen}
        >
            {children}
        </div>
    );
};

export default Collapse;
