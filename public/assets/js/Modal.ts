/**
 * Project: damirifa
 * File: Modal
 * Created by Pennycodes on 4/20/2022.
 * Copyright damirifa
 */
import {select, selectAll} from "../helpers/DOMHelpers";


class Modal {
    modalTrigger: NodeListOf<HTMLElement>
    modalClose: NodeListOf<HTMLElement>
    modalId: string | null | undefined
    constructor() {
        this.modalTrigger = selectAll(".modal-trigger")
        this.modalClose = selectAll(".modal-close, .modal-dismiss")

        this._init()

    }

    private _init() {
        if (this.modalTrigger) {
            const setId = this.setModalId
            this.modalTrigger.forEach(function (e){
                e.addEventListener('click', function (){
                    const modalId = this.getAttribute('data-modal')
                    setId(modalId)
                    if (modalId) {
                        select("#"+ modalId)?.classList.toggle('is-active')
                        select("#"+ modalId + " .modal-background")?.classList.toggle("scaleInCircle")
                        select("#"+ modalId + " .modal-content")?.classList.toggle("scaleIn")
                        select("#"+ modalId + " .modal-close")?.classList.toggle("is-hidden")

                        select("#scrollnav, #backtotop")?.classList.toggle('is-hidden')

                    }
                })
            })
        }
        if (this.modalClose) {
            const modalId = this.getModalId()
            this.modalClose.forEach(function (e){
                e.addEventListener('click', function (){

                    if (modalId) {
                        select("#"+ modalId + " .modal-background")?.classList.toggle("scaleInCircle")
                        select("#"+ modalId + " .modal-content")?.classList.toggle("scaleIn")
                        select("#"+ modalId + " .modal-close")?.classList.toggle("is-hidden")

                        setTimeout(function () {
                            select(".modal.is-active")?.classList.remove("is-active");
                            select("#scrollnav, #backtotop")?.classList.toggle('is-hidden')
                        }, 500);

                    }
                })
            })
        }
    }

    private setModalId (el: string | null) {
        this.modalId = el
    }

    private getModalId () {
        return this.modalId
    }

    public static bootstrap() {
        return new Modal()
    }
}

export { Modal }
