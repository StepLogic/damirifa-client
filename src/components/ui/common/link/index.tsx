import NextLink, { LinkProps as NextLinkProps } from "next/link";
import s from "./index.module.css";
import cn from "classnames";

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "icon";
  target?: string;
} & NextLinkProps;
const Link: React.FC<Props> = ({
  href,
  children,
  className,
  variant,
  disabled = false,
  target = "_self",
  ...props
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
      [s.disabled]: disabled,
    },
    className
  );
  return (
    <NextLink {...props} target={target} className={rootClassName} href={href}>
        {children}
    </NextLink>
  );
};

export default Link;
