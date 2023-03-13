/**
 * Project: doctordoctor
 * File: BackToTop
 * Created by Pennycodes on 3/3/2022.
 * Copyright doctordoctor
 */
import {getScrollTop, select} from "../helpers/DOMHelpers";

class BackToTop {
    pxShow: number

    constructor() {
        this.pxShow = 600
        this._init()
    }

    private _init() {
        const pxShow = this.pxShow
        window.addEventListener('scroll', function () {
            if (getScrollTop() >= pxShow) {
               select('#backtotop')?.classList.add("visible");
            } else {
                select('#backtotop')?.classList.remove("visible");
            }
        });
       // @ts-ignore
        select("#backtotop a")?.addEventListener("click", function () {
            window.scrollTo({top: 0, behavior: 'smooth'})
            return false;
        });
    }

    public static bootstrap() {
        return new BackToTop()
    }
}

export { BackToTop }
