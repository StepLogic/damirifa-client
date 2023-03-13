import React from "react";
import cn from "classnames";
import s from "./index.module.css";
import {SplideSlide} from "@splidejs/react-splide";

const ThankYou = () => {
    return (
        <SplideSlide>
            <div className={cn(s.root)}>
                <div>
                    <h5>Arthur von</h5>
                </div>
                <div>
                    <h5>Zaire Jael</h5>
                </div>
                <div>
                    <h5>Kwame Jamina</h5>
                </div>
            </div>
        </SplideSlide>
    );
};

export default React.memo(ThankYou);
