/**
 * Project: doctordoctor
 * File: Player
 * Created by Pennycodes on 3/5/2022.
 * Copyright doctordoctor
 */
import {getById, select} from "../helpers/DOMHelpers";

class Player {
    playBtn: HTMLElement | null
    controlPanel: HTMLElement | null
    infoBar: HTMLElement | null
    progressBar: HTMLElement | null
    bar: HTMLElement | null
    source: string
    audio: HTMLAudioElement
    timelineWidth: number
    duration: number
    volume: HTMLElement | null

    constructor() {
        this.playBtn = getById('play')
        this.controlPanel = getById('control-panel')
        this.infoBar = getById('info')
        this.progressBar = select('.progress-bar')
        this.bar = select('.bar')
        this.source = ''
        this.timelineWidth = 100
        this.duration = 0
        this.volume = getById('volume')
        this.audio =  new Audio()
        this._init()
    }

    private _init() {
        if (this.playBtn === null) return false;
        this.loadTrack()
        const audio = this.audio
        let glob = this
        //@ts-ignore
        this.playBtn?.addEventListener('click', this.play.bind(this));
        audio?.addEventListener("canplay", function () {
            glob.duration = this.duration;
            this.addEventListener('ended', glob.reset.bind(glob));
            this.addEventListener('timeupdate', glob.timeUpdate.bind(glob));
            this.addEventListener('progress', glob.bufferUpdate.bind(glob));
        });


    }

    private play () {
        let controlPanelObj = this.controlPanel,
            infoBarObj = this.infoBar,
            audio = this.audio
        // @ts-ignore
        Array.from(controlPanelObj.classList).find(function(element){

            if (element !== 'active') {
                audio.play().then(console.log)
                // @ts-ignore
                controlPanelObj.classList.add('active')
            }else {
                audio.pause()
                // @ts-ignore
                controlPanelObj.classList.remove('active')
            }

        });
        // @ts-ignore
        Array.from(infoBarObj.classList).find(function(element){
            // @ts-ignore
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });
    }
    private loadTrack () {
        let source = this.source;
        const audio = this.audio
        const volume = this.volume
        const checks = this.checks.bind(this)
        fetch('/api/track').then(r=> r.blob()).then(b => {
            source = URL.createObjectURL(b)
            audio.src = source
            // @ts-ignore
            audio.volume = Number(volume.value)/100
            audio.load()
            checks()
        })
    }
    private checks () {
        const audio = this.audio
        // @ts-ignore
        this.volume.oninput = function(){
            // @ts-ignore
            audio.volume =Number(this.value)/100;
        }
    }
    private fireEvent(el: HTMLElement | null, action: string){
        el?.dispatchEvent( new Event(action, {bubbles: true, cancelable: false}));
    }

    private reset () {
        this.fireEvent(this.playBtn, 'click');
        // @ts-ignore
        this.bar.style.width = "0%";
        this.audio.load()
    }

    private timeUpdate() {
        if (this.audio.currentTime === 0 )return
        this.bufferUpdate()
        // @ts-ignore
        this.bar.style.width = this.timelineWidth * (this.audio.currentTime / this.duration) + "%";
    }

    private bufferUpdate() {
        if (this.audio.buffered.length == 0) return
        // @ts-ignore
        this.bar.style.width = this.timelineWidth * (this.audio.buffered.end(0) / this.duration) + "%"
    }
    public static bootstrap () {
        return new Player()
    }
}

export { Player }
