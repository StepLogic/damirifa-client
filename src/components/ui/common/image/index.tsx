import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import cn from "classnames";
import s from "./index.module.css";

type Props = {
  className?: string;
  src: string;
  rounded?: boolean;
  border?: boolean;
  alt?: string;
  circle?: boolean;
  width?: number;
  height?: number;
} & NextImageProps;

const Image: React.FC<Props> = ({
  src,
  className,
  rounded = false,
  border = false,
  width,
  height,
  alt = "next optimized image",
  circle = false,
  ...props
}) => {
  const rootClassName = cn(
    {
      [s.rounded]: rounded,
      [s.border]: border,
      [s.circle]: circle,
    },
    className
  );
  return (
    <div className={cn(s.root, className)}>
      <NextImage
        className={rootClassName}
        src={src}
        blurDataURL={src}
        placeholder={"blur"}
        layout={width ? "fixed" : "fill"}
        width={width}
        height={height}
        {...props}
        alt={alt || ""}
        objectPosition={"center"}
      />
    </div>
  );
};

export default Image;
