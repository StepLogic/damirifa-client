import React from "react";
import s from "./index.module.css";
import cn from "classnames";

interface Props {
    className?: string;
}

const ImagePlaceholder: React.FC<Props> = (props) => {
    const {className} = props;
    return <div className={cn(s.root, className)}/>;
};

export default ImagePlaceholder;
