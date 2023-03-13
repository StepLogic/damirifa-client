import s from "./index.module.css";
import cn from "classnames";

type Props = {
    className?: string;
};
const LoadingDots: React.FC<Props> = (props) => {
    const {className} = props;
    return (
        <span className={cn(s.root, className)}>
      <span className={s.dot} key={`dot_1`}/>
      <span className={s.dot} key={`dot_2`}/>
      <span className={s.dot} key={`dot_3`}/>
    </span>
    );
};

export default LoadingDots;
