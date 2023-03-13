/**
 * Project: damirifa
 * File: DOMHelpers
 * Created by Pennycodes on 4/20/2022.
 * Copyright damirifa
 */
function getScrollTop(): number {
    return (document.scrollingElement || document.documentElement).scrollTop
}

function getById(target: string): HTMLElement | null {
    return document.getElementById(target)
}

function getByClass(target: string): Element {
    return document.getElementsByClassName(target)[0]
}

function getAllByClass(target: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(target)
}

function getAllByTags(target: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(target)
}


function selectAll(target: string): NodeListOf<HTMLElement> {
    return document.querySelectorAll(target)
}

function select (element: string) : HTMLElement | null {
    return document.querySelector(element)
}

function isVisibleElement(element: HTMLElement): boolean {
    return !(element.offsetWidth === 0 && element.offsetHeight === 0)
}

function  pageBody () : HTMLBodyElement {
    return <HTMLBodyElement>document.querySelector("body");
}

function pageHTML () : HTMLElement | null {
    return document.querySelector("html")
}

function pageWindow (callback: EventListenerOrEventListenerObject)  {
    window.addEventListener("load", callback)
}


function ready(callback: EventListenerOrEventListenerObject) {
    // @ts-ignore
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        // @ts-ignore
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}


export {
    getScrollTop,
    isVisibleElement,
    getByClass,
    getById,
    selectAll,
    select,
    pageBody,
    pageHTML,
    ready,
    pageWindow,
    getAllByClass,
    getAllByTags
}
