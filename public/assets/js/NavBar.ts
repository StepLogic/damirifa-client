/**
 * Project: doctordoctor
 * File: NavBar
 * Created by Pennycodes on 3/3/2022.
 * Copyright doctordoctor
 */
import {getScrollTop, select, selectAll} from "../helpers/DOMHelpers";

class NavBar {
    navBar: HTMLElement | null
    navBarDefault: HTMLElement | null
    navBarLight: HTMLElement | null
    navLight: HTMLElement | null
    navBarWrap: NodeListOf<Element>
    navBarPlaceholder: HTMLElement | null
    navBarTransparent: HTMLElement | null
    button: HTMLElement | null
    burger: HTMLElement | null

    constructor() {
        this.NodeInit()
        this.navBar = select('.navbar-wrapper')
        this.navBarLight = select('.navbar-wrapper.navbar-fade.navbar-light')
        this.navLight = select('.navbar-light')
        this.navBarDefault = select('.navbar-wrapper.navbar-fade.navbar-default')
        this.navBarWrap = selectAll('.navbar-wrapper.navbar-fade')
        this.navBarPlaceholder= select('.navbar-placeholder')
        this.navBarTransparent= select('.navbar-wrapper.navbar-fade.is-transparent')
        this.button= select('.button-signup')
        this.burger= select('.custom-burger')
        this._init()
    }

    private _init(){
      this._light()
      this._default()
      this._navLight()
      this._initMobile()
    }

    private _light (){
        if (!!this.navBarLight) {
            // @ts-ignore
            this.navBarWrap.wrap('<div class="navbar-placeholder"></div>')
           this.navBarPlaceholder= select('.navbar-placeholder')
            if (this.navBarPlaceholder) {
                // @ts-ignore
                this.navBarPlaceholder.style.height = this.navBarWrap?.offsetHeight
            }


            const transparent = this.navBarTransparent
            const wrapper = this.navBar
            window.addEventListener('scroll', function (){
                const height = getScrollTop()
                if (height > 65) {
                    transparent?.classList.remove('is-transparent navbar-light')
                    transparent?.classList.add('navbar-faded')
                }else {
                    wrapper?.classList.remove('navbar-faded')
                    wrapper?.classList.add('is-transparent navbar-light')
                }
            })
        }
    }

    private _default(){
        if (!!this.navBarDefault) {
            // @ts-ignore
            this.navBarWrap.wrap('<div class="navbar-placeholder"></div>')

            this.navBarPlaceholder= select('.navbar-placeholder')

            if (this.navBarPlaceholder) {
                // @ts-ignore
                this.navBarPlaceholder.style.height = this.navBarWrap?.offsetHeight
            }

            const transparent = this.navBarTransparent
            const wrapper = this.navBar
            window.addEventListener('scroll', function (){
                const height = getScrollTop()
                if (height > 65) {
                    transparent?.classList.remove('is-transparent')
                    transparent?.classList.add('navbar-faded')
                }else {
                    wrapper?.classList.remove('navbar-faded')
                    wrapper?.classList.add('is-transparent')
                }
            })
        }
    }

    private _navLight () {
        if (!!this.navLight) {
            const height = getScrollTop()
            if (height > 80) {
                this.button?.classList.remove('light-btn')
                this.button?.classList.add('primary-btn')
            }else {
                this.button?.classList.remove('primary-btn')
                this.button?.classList.add('light-btn')
            }
        }
    }

    private _initMobile() {
        this.burger?.addEventListener('click', function (){

            this.classList.toggle('is-active')

            const navMenu = this.closest('.navbar')?.querySelector('.navbar-menu')
            if (navMenu) {
                if (navMenu.classList.contains('is-active')) {

                    navMenu.classList.remove('is-active')

                    navMenu.classList.remove('is-dark-mobile')
                }else {

                    navMenu.classList.add("is-active");

                    const navL = this.closest(".navbar-fade.navbar-light")
                    if (navL) {
                        navL.classList.add("is-dark-mobile");
                    }

                }

            }

            const navF = this.closest(".navbar-faded")
            if (navF) {
                if (navF.classList.contains("is-dark-mobile")) {
                    navF.classList.remove("is-dark-mobile");
                }
            }

            const navS =  this.closest(".navbar.is-static")
            if (navS) {
             navS.classList.toggle("is-dark-mobile");
            }
        })
        this.burger?.addEventListener('click', function (){
            const iBox = this.querySelector(".icon-box-toggle")
            if (iBox) {
                iBox.classList.toggle("active");
            }

        });
    }

    private NodeInit () {
        // @ts-ignore
        NodeList.prototype.wrap = function (wrapper: string) {
            let temp = document.createElement('div'),
                parent = this[0].parentNode,
                insertWhere = this[0].previousSibling,
                target: ChildNode | null;

            temp.innerHTML = wrapper;

            target = temp.firstChild;

            // @ts-ignore
            while (target.firstChild) {
                // @ts-ignore
                target = target.firstChild;
            }

            [].forEach.call(this, function(a){
                // @ts-ignore
                target.appendChild(a);
            });

            // @ts-ignore
            parent.insertBefore(temp.firstChild, (insertWhere ? insertWhere.nextSibling : parent.firstChild));

        }

    }


    public static bootstrap() {
        return new NavBar()
    }

}

export { NavBar }
