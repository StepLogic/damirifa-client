import { Image } from "@components/ui/common";
// import styled from 'styled-components'
import { ImQuotesLeft } from "react-icons/im";
import cn from "classnames";
import s from "./index.module.css";

type Props = {
  className?: string;
};
const TestimonialCards: React.FC<Props> = ({ className }) => {
  return (
    <article className={cn(s.root, className)}>
      <Image
        src={"/constants/obituary-image.jpeg"}
        loading="lazy"
        objectFit={"cover"}
        className={s.cardImage}
        alt="resposive testimonial image"
        quality={60}
      />
      <div className={s.quotes}>
        <ImQuotesLeft />
      </div>
      <div className={s.cardContent}>
        <p className={s.p}>
          Consectetur adipiscing elit. Diam gravida dui ut eu luctus erat eu
          feugiat lorem. Integer quam viverra vestibulum, ridiculus ut leo urna
          malesuada mi.
        </p>

        <h4 className={s.h4}>Jane Doe</h4>
        <h5 className={cn("text-muted", s.h5)}>UI Designer, AloeTown</h5>
      </div>
    </article>
  );
};

export default TestimonialCards;
