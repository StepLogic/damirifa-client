import React from "react";
import { Divider } from "@components/ui/common";
import s from "./index.module.css";
import cn from "classnames";

export type Props = { src: string; className?: string; title?: string };
type ContainerProps = { backgroundUrl?: string };

export default function Poster({ src, className, title }: Props) {
  return (
    <section
      className={cn(className, s.root)}
      style={{
        background: `linear-gradient(
      0deg,
      rgba(18, 18, 18, 0.8),
      rgba(18, 18, 18, 0.8)
    ),url('${src}')`,
      }}
    >
      <h1 className={s.label}>{title}</h1>
      <Divider variant="primary" height="thick" className={s.divider} />
    </section>
  );
}
