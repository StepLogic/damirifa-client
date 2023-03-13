import {Image} from "@components/ui/common";
import {SplideSlide} from "@splidejs/react-splide";
import React from "react";
import s from "./index.module.css";

interface Props {
    src?: string;
    alt?: string;
    onClick?: Function;
    className?: string;
}

const GalleryThumbnail: React.FC<Props> = (props) => {
    const {src = "/constants/jerry.jpg", alt = "thumbnail", onClick} = props;

    return (
        <SplideSlide>
            <div className={s.root}>
                <Image
                    src={src}
                    alt={alt}
                    objectFit="cover"
                    objectPosition="center"
                    rounded
                    className={s.image}
                    loading="lazy"
                />
                <div className={s.overlay} onClick={() => onClick && onClick()}>
                    <svg className={s.overlaySvg}>
                        <image xlinkHref="/svgs/expand.svg"/>
                    </svg>
                </div>
            </div>
        </SplideSlide>
    );
};

export default React.memo(GalleryThumbnail);
