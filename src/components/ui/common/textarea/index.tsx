// import React from 'react'
// import styled, { css } from 'styled-components'

// export type Props = { id?: string; className?: string }

// // export default function TextArea({ ...rest }: Props) {
// //   return <Container {...rest} />
// // }
// const primary = css`
//   display: flex;
//   flex-direction: column;
//   background: rgba(255, 255, 255, 0.15);

//   border: none;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255, 255, 255, 0.8);
//   :focus-visible {
//     outline: none;
//     border: 1px solid var(--damirifa-red-2);
//   }
// `
// const secondary = css`
//   background: rgba(228, 228, 228, 0.5);
//   border-radius: 5px;
//   border: none;
//   font-style: normal;
//   color: black;
//   :focus-visible {
//     outline: none;
//     border: 1px solid var(--damirifa-red-2);
//   }
// `
// // const search = css`
// //   width: 100%;
// //   height: 50px;
// //   background: rgba(228, 228, 228, 0.5);
// //   border-radius: 5px;
// //   color: black;
// // `
// const Container = styled.textarea.attrs((props) => ({
//   className: props.className,
// }))`
//   box-sizing: border-box;
//   border-radius: 10px;
//   ${(props: any) => {
//     if (props.secondary) {
//       return secondary
//     } else {
//       return primary
//     }
//   }}
// `

import cn from "classnames";
import React, {JSXElementConstructor, TextareaHTMLAttributes,} from "react";

import s from "./index.module.css";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    variant?: "primary" | "secondary" | "icon";
    Component?: string | JSXElementConstructor<any>;
    disabled?: boolean;
    showWordCount?: boolean;
}

const TextArea: React.FC<Props> = (props) => {
    const {
        className,
        variant = "primary",
        disabled = false,
        showWordCount = false,
        style = {},
        Component = "textarea",
        ...rest
    } = props;

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
        <Component
            data-variant={variant}
            data-word={showWordCount ? `${350}` : undefined}
            className={rootClassName}
            disabled={disabled}
            type="radio"
            style={{
                ...style,
            }}
            {...rest}
        />
    );
};

export default TextArea;
