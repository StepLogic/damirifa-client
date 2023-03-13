import React from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
    className?: string;
}

const TextPlaceholder: React.FC<Props> = (props) => {
    const {className} = props;
    return <div className={cn(s.root, className, "rounded-md")}/>;
};

export default TextPlaceholder;
