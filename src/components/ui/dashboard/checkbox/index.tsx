/* A checkbox component. */
// import React, { InputHTMLAttributes } from 'react'
// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, {InputHTMLAttributes, JSXElementConstructor,} from "react";

import s from "./index.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    variant?: "primary" | "secondary";
    Component?: string | JSXElementConstructor<any>;
    disabled?: boolean;
    name?: string;
    register?: any;
}

const CheckBox: React.FC<Props> = (props) => {
    const {
        className,
        variant = "primary",
        disabled = false,
        style = {},
        Component = "input",
        name,
        register,
        ...rest
    } = props;
    let otherProps = {...rest};
    const rootClassName = cn(
        s.root,
        {
            [s.primary]: variant === "primary",
            [s.secondary]: variant === "secondary",
            [s.disabled]: disabled,
        },
        className
    );
    /* A hook from react-hook-form. */
    if (register) {
        otherProps = {
            ...register(name, {
                required: true,
            }),
        };
    }

    return (
        <Component
            data-variant={variant}
            className={rootClassName}
            disabled={disabled}
            name={name}
            type="checkbox"
            style={{
                ...style,
            }}
            {...otherProps}
        />
    );
};

export default CheckBox;

//   return (
//
//   )
// }
// const primary = css`
//   label {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 1.0625rem;
//     aspect-ratio: 1/1;
//     background: transparent;
//     border: 1.5px solid rgba(255, 255, 255, 0.3);
//     border-radius: 1px;
//     svg {
//       display: none;
//       color: white;
//     }
//   }
//   input[type='radio']:checked ~ label {
//     svg {
//       display: block;
//       color: white;
//     }
//     background: #830009;
//     border-radius: 1px;
//     border-color: #830009;
//   }
// `
// const secondary = css`
//   label {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 1.0625rem;
//     aspect-ratio: 1/1;
//     border: 1.5px solid rgba(0, 0, 0, 0.3);
//     border-radius: 1px;
//     background: transparent;
//     svg {
//       display: none;
//       color: white;
//     }
//   }

//   input[type='checkbox']:checked ~ label {
//     svg {
//       display: block;
//       color: white;
//     }
//     background: #830009;
//     border-radius: 1px;
//     border-color: #830009;
//   }
// `
// // const search = css`
// //   width: 100%;
// //   height: 50px;
// //   background: rgba(228, 228, 228, 0.5);
// //   border-radius: 5px;
// //   color: black;
// // `
// const Container = styled.div.attrs((props) => ({
//   className: props.className,
// }))`
//   box-sizing: border-box;
//   input {
//     display: none;
//   }
//   :focus {
//     outline: none !important;
//     border: 1.5px solid #830009;
//   }
//   ${(props: any) => {
//     if (props.secondary) {
//       return secondary
//     } else {
//       return primary
//     }
//   }}
// `
