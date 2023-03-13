/**
 * Project: damirifa
 * File: Sidebar
 * Created by Pennycodes on 4/20/2022.
 * Copyright damirifa
 */
import {select} from "../helpers/DOMHelpers";

class Sidebar {
    navigationMenu: HTMLElement | null
    categoryLink: HTMLElement | null
    hamburgerBtn: HTMLElement | null
    navigationTrigger: HTMLElement | null
    sideNavigationMenu: HTMLElement | null

    constructor() {
        this.navigationMenu = select(".navigation-menu > li.has-children a.parent-link")
        this.categoryLink = select(".category-link")
        this.hamburgerBtn = select(".hamburger-btn")
        this.navigationTrigger = select("#navigation-trigger, .navigation-trigger, .navigation-close")
        this.sideNavigationMenu = select(".side-navigation-menu")

        this._init()
    }

    private _init() {
        if (this.navigationMenu) {
            this.navigationMenu.addEventListener('click', function (i) {
                i.preventDefault()
                if (this.parentElement)
                if (!this.parentElement.classList.contains('active')) {
                    Sidebar._slideUp(select(".navigation-menu li ul"))
                    Sidebar._toggleSlide(this.nextElementSibling)
                    select(".navigation-menu li")?.classList.remove("active")
                    this.parentElement.classList.add('active')
                }
                else
                    Sidebar._toggleSlide(this.nextElementSibling)
                    select(".navigation-menu li")?.classList.remove("active")

            })
        }

        if (this.categoryLink) {
            select(".category-link.is-active")?.classList.remove("is-active")
            this.categoryLink.classList.add("is-active")
            const category_id = this.categoryLink.getAttribute("data-navigation-menu")
            select(".navigation-menu-wrapper")?.classList.add("is-hidden")
            select("#"+category_id)?.classList.remove("is-hidden");
        }

        if (this.hamburgerBtn) {
            select("#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle")
                ?.classList.toggle('active')
        }

        if (this.navigationTrigger) {
            select(".side-navigation-menu")?.classList.toggle('is-active')
        }

        if (this.sideNavigationMenu) {
            this.sideNavigationMenu.addEventListener('mouseenter', function (){
                const trigger =  select("#navigation-trigger");
                const close =  select(".navigation-close");
                if (trigger) trigger.style.opacity = "0"
                if (close) close.style.opacity = "1"

            })

            this.sideNavigationMenu.addEventListener('mouseleave', function (){
                const trigger =  select("#navigation-trigger");
                const close =  select(".navigation-close");
                if (trigger) trigger.style.opacity = "1"
                if (close) close.style.opacity = "0"
            })
        }
    }

    private static _slideUp(target: HTMLElement | Element | null) {
        const duration = 500
        if (target)
        if ("style" in target) {
            target.style.transitionProperty = 'height, margin, padding';
            target.style.overflow = 'hidden';
            target.style.height = String(0);
            target.style.paddingTop = String(0);
            target.style.paddingBottom = String(0);
            target.style.marginTop = String(0);
            target.style.marginBottom = String(0);
            target.style.transitionDuration = duration + 'ms';
            target.style.boxSizing = 'border-box';
            target.style.height = target.offsetHeight + 'px';
            target.offsetHeight;

            setTimeout( () => {
                target.style.display = 'none';
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
        }

    }

    private static _slideDown(target: HTMLElement | Element | null) {
        const duration = 500
        if (target)
        if ("style" in target) {
            target.style.removeProperty('display');

            let display = window.getComputedStyle(target).display;
            if (display === 'none') display = 'block';
            target.style.display = display;
            let height = target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = String(0);
            target.style.paddingTop = String(0);
            target.style.paddingBottom = String(0);
            target.style.marginTop = String(0);
            target.style.marginBottom = String(0);
            target.offsetHeight;
            target.style.boxSizing = 'border-box';
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + 'ms';
            target.style.height = height + 'px';
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            setTimeout( () => {
                target.style.removeProperty('height');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
        }

    }

    private static _toggleSlide(target: HTMLElement | Element | null) {
        if (target)
            if (window.getComputedStyle(target).display === 'none') {
                return Sidebar._slideDown(target);
            } else {
                return Sidebar._slideUp(target);
            }
    }

    public static bootstrap() {
        return new Sidebar()
    }
}

export { Sidebar }
