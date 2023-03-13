import React, {HTMLAttributes,} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
// eslint-disable-next-line
import 'react-perfect-scrollbar/dist/css/styles.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Scrollbar: React.FC<Props> = (props) => {
    const {children, ...rest} = props

    return (
        <PerfectScrollbar {...rest} component="div">
            {children}
        </PerfectScrollbar>
    )
}

export default Scrollbar
