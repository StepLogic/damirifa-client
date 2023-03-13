export type LoaderProps = { className?: string }
import s from './index.module.css'
import cn from 'classnames'

export default function Loader({className}: LoaderProps) {
    return (
        <div className={cn(className, s.root)}>
            <div className={s.spinner}/>
            <svg className={s.logoSvg}>
                <image xlinkHref={'/favicon.webp'}/>
            </svg>
        </div>
    )
}
