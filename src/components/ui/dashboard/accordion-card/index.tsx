import React, {JSXElementConstructor} from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
    className?: string;
    role?: string;
    onClick?: Function;
    Component?: string | JSXElementConstructor<any>;
}

const AccordionCard: React.FC<Props> = (props) => {
    const {
        children,
        Component = "div",
        className,
        onClick,
        role,
        ...rest
    } = props;
    return (
        <Component
            tabIndex={-1}
            role={role}
            onClick={onClick}
            className={cn(s.root, className)}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default AccordionCard;
