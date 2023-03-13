/**
 * Project: damirifa
 * File: Tracker
 * Created by Pennycodes on 4/26/2022.
 * Copyright damirifa
 */

class Tracker {
    label: string
    el: HTMLElement
    value: string
    currentValue: string

    constructor(label: string, value: string) {
        this.label = label
        this.el = document.createElement('span')
        this.value = value
        this.currentValue = ''

        this._init()
    }

    private _init () {
        this.el.className = 'flip-clock__piece';
        this.el.innerHTML = '<b class="flip-clock__card card__flip"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
            '<span class="flip-clock__slot">' + this.label + '</span>';

        this.update(this.value);

    }

    protected update (val: string) {
        const top = <HTMLElement>this.el.querySelector('.card__top'),
            bottom = this.el.querySelector('.card__bottom'),
            back = this.el.querySelector('.card__back'),
            backBottom = this.el.querySelector('.card__back .card__bottom');
        val = ( '0' + val ).slice(-2);
        if ( val !== this.currentValue ) {

            if ( this.currentValue >= String(0) ) {
                if (back && bottom) {
                    back.setAttribute('data-value', this.currentValue);
                    bottom.setAttribute('data-value', this.currentValue);
                }

            }
            this.currentValue = val;
          if (top && backBottom) {
              top.innerText = this.currentValue;
              backBottom.setAttribute('data-value', this.currentValue);
          }

            this.el.classList.remove('flip');
            void this.el.offsetWidth;
            this.el.classList.add('flip');
        }
    }
}
export { Tracker }
