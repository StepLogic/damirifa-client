/**
 * Project: damirifa
 * File: Utilities
 * Created by Pennycodes on 4/20/2022.
 * Copyright damirifa
 */
import {
  getAllByClass,
  getScrollTop,
  pageBody,
  pageHTML,
  select,
  selectAll,
} from "../helpers/DOMHelpers";

class Utilities {
  hasBackgroundImage: NodeListOf<HTMLElement>;
  hasParallax: NodeListOf<HTMLElement>;
  content: NodeListOf<HTMLElement>;
  hash: HTMLElement | null;
  navPrimary: HTMLElement | null;

  constructor() {
    this.hasBackgroundImage = selectAll(".has-background-responsive-image");
    this.hasParallax = selectAll(".parallax");
    this.content = selectAll(".content-b");
    this.hash = select('a[href*="#"]:not([href="#"])');
    this.navPrimary = select(".nav-primary");
    this._init();
  }

  private _init() {
    this.backgroundImages();
    this.parallax();
    this.scrollToHash();
    this.AnchorScroll();
  }
  private backgroundImages() {
    if (!!this.hasBackgroundImage) {
      this.hasBackgroundImage.forEach(function (el) {
        const bgImage = el.getAttribute("data-background");
        if (bgImage !== undefined) {
          el.style.backgroundImage = "url(" + bgImage + ")";
        }
      });
    }
  }
  private parallax() {
    this.parallaxBG();
    if ("ontouchstart" in window) {
      document.documentElement.className =
        document.documentElement.className + " touch";
    }
    if (!pageHTML()?.classList.contains("touch")) {
      if (this.hasParallax.length == 0) return;
      this.hasParallax[0].style.backgroundAttachment = "fixed";
    }
    window.addEventListener("resize", this.fullScreenFix.bind(this));
    this.fullScreenFix();
    window.addEventListener("resize", this.backgroundResize.bind(this));
    window.addEventListener("focus", this.backgroundResize.bind(this));
    this.backgroundResize();
    if (!pageHTML()?.classList.contains("touch")) {
      window.addEventListener("resize", this.parallaxPosition.bind(this));
      window.addEventListener("scroll", this.parallaxPosition.bind(this));
      this.parallaxPosition();
    }
    if (navigator.userAgent.match(/Trident\/7\./)) {
      document.body.addEventListener(
        "mousewheel DOMMouseScroll",
        function (event) {
          event.preventDefault();
          //@ts-ignore
          if (event.originalEvent) {
            //@ts-ignore
            const wheelDelta = event.originalEvent.wheelDelta;
            const currentScrollPosition = window.scrollX;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
          }
        }
      );
    }
  }
  private parallaxBG() {
    if (this.hasParallax.length == 0) return;
    this.hasParallax.forEach(function (el) {
      let div = document.createElement("div");
      div.classList.add("parallax-overlay");
      el.prepend(div);
      const attrImage = el.getAttribute("data-background");
      const attrColor = el.getAttribute("data-color");
      const attrOpacity = el.getAttribute("data-color-opacity");
      const attrPositionX = el.getAttribute("data-position-x");

      if (attrImage !== undefined) {
        el.style.backgroundImage = "url(" + attrImage + ")";
      }
      if (attrColor !== undefined) {
        // @ts-ignore
        el.querySelector<HTMLElement>(
          ".parallax-overlay"
        ).style.backgroundColor = attrColor;
      }
      if (attrOpacity !== undefined && attrOpacity != null) {
        // @ts-ignore
        el.querySelector<HTMLElement>(".parallax-overlay").style.opacity =
          attrOpacity;
      }
      if (attrPositionX !== undefined && attrPositionX != null) {
        el.style.backgroundPositionX = attrPositionX;
      }
    });
  }
  private fullScreenFix() {
    const h = pageBody().clientHeight;
    if (this.content.length === 0) return;
    this.content.forEach(function (e) {
      // @ts-ignore
      if (e.clientHeight > h) {
        // @ts-ignore
        this.closest(".fullscreen").classList.add("overflow");
      }
    });
  }
  private backgroundResize() {
    if (this.hasParallax.length == 0) return;
    const windowH = window.innerHeight;
    this.hasParallax.forEach(function (el) {
      // @ts-ignore
      const path = el;
      let contW = path.clientWidth;
      let contH = path.clientHeight;
      let imgW = parseInt(<string>path.getAttribute("data-img-width"));
      let imgH = parseInt(<string>path.getAttribute("data-img-height"));
      if (imgW != null && imgH != null) {
        const ratio = imgW / imgH;
        let diff = 0;
        diff = diff ? diff : 0;
        let remainingH = 0;

        if (
          path.classList.contains("parallax") &&
          !pageHTML()?.classList.contains("touch")
        ) {
          remainingH = windowH - contH;
        }
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        if (contW > imgW) {
          imgW = contW;
          imgH = imgW / ratio;
        }
        path.setAttribute("data-resized-imgW", String(imgW));
        path.setAttribute("data-resized-imgH", String(imgH));
        path.style.backgroundSize = imgW + "px " + imgH + "px";
      }
    });
  }
  private parallaxPosition() {
    if (this.hasParallax.length == 0) return;
    const heightWindow = window.innerHeight;
    const topWindow = getScrollTop();
    const bottomWindow = topWindow + heightWindow;
    const currentWindow = (topWindow + bottomWindow) / 2;
    const is = this.is;
    const hP = this.hasParallax;
    this.hasParallax.forEach(function (el) {
      // @ts-ignore
      const path = el;
      const height = path.clientHeight;
      let top = path.offsetTop;
      let bottom = top + height;
      if (bottomWindow > top && topWindow < bottom) {
        const imgH = parseInt(<string>path.getAttribute("data-resized-imgH"));
        const min = 0;
        const max = -imgH + heightWindow;
        const overflowH =
          height < heightWindow ? imgH - height : imgH - heightWindow;
        top = top - overflowH;
        bottom = bottom + overflowH;
        let value = 0;
        value = min + ((max - min) * (currentWindow - top)) / (bottom - top);
        // if (is(hP,'.titlebar')) {
        //     value =
        //         min + (((max - min) * (currentWindow - top)) / (bottom - top)) * 2;
        // } else {
        //     value = min + ((max - min) * (currentWindow - top)) / (bottom - top);
        // }
        let horizontalPosition = path.getAttribute("data-oriz-pos");
        horizontalPosition = horizontalPosition ? horizontalPosition : "50%";
        path.style.backgroundPosition = horizontalPosition + " " + value + "px";
      }
    });
  }
  private scrollToHash() {
    const navPrimary = this.navPrimary;
    this.hash?.addEventListener("click", function () {
      if (
        location.pathname.replace(/^\//, "") ===
          (<HTMLAnchorElement>(<unknown>this)).pathname.replace(/^\//, "") &&
        location.hostname === (<HTMLAnchorElement>(<unknown>this)).hostname
      ) {
        if ((<HTMLAnchorElement>(<unknown>this)).hash === "#!") return;
        let target = select((<HTMLAnchorElement>(<unknown>this)).hash);
        target = !!target
          ? target
          : select(
              "[name=" +
                (<HTMLAnchorElement>(<unknown>this)).hash.slice(1) +
                "]"
            );
        if (navPrimary?.classList.contains("nav-primary-fixed")) {
          if (!!target) {
            select("html, body")?.animate(
              {
                scrollTop: target.offsetTop - 40,
              },
              750
            );
            return false;
          }
        } else {
          if (!!target) {
            select("html, body")?.animate(
              {
                scrollTop: target.offsetTop - 80,
              },
              750
            );
            return false;
          }
        }
      }
    });
  }
  private static scrollIfAnchor(link: any) {
    link = typeof link == "string" ? link : select(link)?.getAttribute("href");
    const fromTop = 50;
    if (link === "#!") return;
    if (link.indexOf("#") == 0) {
      const $target = select(link);

      // Older browser without pushState might flicker here, as they momentarily
      // jump to the wrong position (IE < 10)
      if (!!$target) {
        select('"html, body"')?.animate({
          scrollTop: $target.offsetTop - fromTop,
        });
        if (history && "pushState" in history) {
          history.pushState(
            {},
            document.title,
            window.location.pathname + link
          );
          return false;
        }
      }
    }
  }
  private AnchorScroll() {
    Utilities.scrollIfAnchor(window.location.hash);
    const elements = getAllByClass(".scroll-link");
    const callback = Utilities.scrollIfAnchor;
    if (elements.length === 0) return;
    Array.from(elements).forEach(function (element) {
      element.addEventListener("click", callback);
    });
  }

  public is(element: any, selector: string) {
    return (
      element.matches ||
      element.matchesSelector ||
      element.msMatchesSelector ||
      element.mozMatchesSelector ||
      element.webkitMatchesSelector ||
      element.oMatchesSelector
    ).call(element, selector);
  }

  public static bootstrap() {
    return new Utilities();
  }
}

export { Utilities };
