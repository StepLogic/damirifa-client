/**
 * Project: doctordoctor
 * File: PageLoader
 * Created by Pennycodes on 3/3/2022.
 * Copyright doctordoctor
 */
import { pageWindow, select } from "../helpers/DOMHelpers";

class PageLoader {
  pageLoader: Element | null;
  infraLoader: Element | null;
  hero: Element | null;
  shadowOverlay: HTMLElement | null;

  constructor() {
    this.pageLoader = select(".pageloader");
    this.infraLoader = select(".infraloader");
    this.hero = select(
      ".rounded-hero, .car-hero .left-responsive-image, .car-hero .right-responsive-image"
    );
    this.shadowOverlay = select(".shadow-overlay");
    this._init();
  }

  private _init() {
    this.pageLoader?.classList.toggle("is-active");
    this.initialize();
  }
  private initialize() {
    const pLoader = this.pageLoader;
    const iLoader = this.infraLoader;
    const hero = this.hero;
    const hide = this.hide;
    const pageLoaderTimeout = setTimeout(function () {
      pLoader?.classList.toggle("is-active");
      iLoader?.classList.toggle("is-active");

      clearTimeout(pageLoaderTimeout);
      setTimeout(function () {
        hero?.classList.add("is-active");
        //  setInterval(hide, 1000);
        //@ts-ignore
      }, 350);
    }, 700);
  }

  private hide() {
    let opacity = Number(
      window
        .getComputedStyle(<Element>this.shadowOverlay)
        .getPropertyValue("opacity")
    );
    if (opacity > 0) {
      opacity = opacity - 0.1;
      // @ts-ignore
      this.shadowOverlay.style.opacity = opacity.toString();
      this.shadowOverlay?.remove();
    } else {
      clearInterval(0);
    }
  }
  public static bootstrap() {
    new PageLoader();
  }
}

export { PageLoader };
