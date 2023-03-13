import cn from 'classnames'
import React, {HTMLAttributes, JSXElementConstructor,} from 'react'

import s from './index.module.css'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: 'primary' | 'secondary'
    height?: 'thin' | 'thick' | 'very-thin'
    size?: 'lg' | 'md' | 'sm'
    Component?: string | JSXElementConstructor<any>
    width?: string | number
}

const Button: React.FC<Props> = (props) => {
    const {
        className,
        variant = 'primary',
        width,
        size,
        height,
        style,
        Component = 'hr',
        ...rest
    } = props

    const rootClassName = cn(
        s.root,
        {
            [s.primary]: variant === 'primary',
            [s.secondary]: variant === 'secondary',
            [s.md]: size === 'md',
            [s.lg]: size === 'lg',
            [s.sm]: size === 'sm',
            [s.thin]: height === 'thin',
            [s.veryThin]: height === 'very-thin',
            [s.thick]: height === 'thick',
        },
        className,
    )

    return (
        <Component
            data-variant={variant}
            className={rootClassName}
            style={{
                width,
                ...style,
            }}
            {...rest}
        />
    )
}

export default Button
