/**
 * Project: damirifa
 * File: Clock
 * Created by Pennycodes on 4/22/2022.
 * Copyright damirifa
 */

import { Tracker } from './Tracker';

interface TrackerOptions {
    Total: string | number
    Days: string | number
    Hours: string | number
    Minutes: string | number
    Seconds: string | number
}

class Clock {
    countdown: string
    callback: Function
    el?: HTMLElement | null

    constructor( countdown?: string, callback?: Function) {
        this.countdown = countdown ? countdown : ''
        this.callback = callback || function(){}


        this._init()
    }

    private _init() {
        const updateFn = this.countdown !== '' ? Clock.getTimeRemaining : Clock.getTime

        this.el = document.createElement('div')
        this.el.className = 'flip-clock';
        let trackers = <any>{},
            t = updateFn(this.countdown),
            key,
             timeInterval;

        for ( key in t ){
            if ( key === 'Total' ) { continue; }
            trackers[key] = new Tracker(key, t[key as keyof TrackerOptions].toString());
            this.el.appendChild(trackers[key].el);
        }

        let i = 0;
        const updateClock = () => {
            timeInterval = requestAnimationFrame(updateClock);

            if ( i++ % 10 ) { return; }

            const t = updateFn(this.countdown);
            if ( t.Total < 0 ) {
                cancelAnimationFrame(timeInterval);
                for ( key in trackers ){
                    trackers[key].update( '0' );
                }
             this.callback()
                return;
            }

            for ( key in trackers ){
                trackers[key].update( t[key as keyof TrackerOptions].toString() );
            }
        }

        setTimeout(updateClock,500);

    }

    private static getTime(): TrackerOptions {
        const t = new Date();
        return {
            Total: t.getTime(),
            Days: t.getDate(),
            Hours: t.getHours() % 12,
            Minutes: t.getMinutes(),
            Seconds: t.getSeconds()
        };
    }
    private static getTimeRemaining (endTime: string) : TrackerOptions {
        const now = new Date();
        const t = Date.parse(endTime) - now.getTime();
        return {
            Total: t,
            Days: Math.floor(t / (1000 * 60 * 60 * 24)),
            Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
            Minutes: Math.floor((t / 1000 / 60) % 60),
            Seconds: Math.floor((t / 1000) % 60)
        };
    }




    public static bootstrap(element:HTMLElement | null, countdown?: string, callback?: Function){
        const clock = new Clock(countdown, callback);
        if (element)
        { // @ts-ignore
            element.appendChild(clock.el);
        }
    }

}


export  { Clock }
