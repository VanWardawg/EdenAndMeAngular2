import { Injectable, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MediaService {
    mediaChanged : EventEmitter<Media>;
    currentMedia : Media;
    window : Window;
    preDefinedQueries = {
      'phone': '(max-width:480px)',
      'tablet': '(min-width:481px) and (max-width:979px)',
      'laptop': '(min-width:980px) and (max-width:1279px)',
      'desktop': '(min-width:1280px)'
    };
    
    constructor() {
        this.getMediaSize();
        this.mediaChanged = new EventEmitter<Media>();
    }

    private emitEvent() : void {
        if(this.mediaChanged == null) {
            return;
        }
        this.mediaChanged.emit(this.currentMedia);
    }

    private getMediaSize() : void {
        let curMedia = this.currentMedia || {name: 'desktop', size: this.preDefinedQueries['desktop']};
        let mediaQuery : MediaQueryList;
        mediaQuery = window.matchMedia(this.preDefinedQueries['phone']);
        if(mediaQuery.matches) {
            this.currentMedia = {name: 'phone', size: this.preDefinedQueries['phone']};
            if(curMedia.name != this.currentMedia.name) this.emitEvent();
            console.log("We are on a Phone Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['tablet']);
        if(mediaQuery.matches) {
            this.currentMedia = {name: 'tablet', size: this.preDefinedQueries['tablet']};
            if(curMedia.name != this.currentMedia.name) this.emitEvent();
            console.log("We are on a tablet Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['laptop']);
        if(mediaQuery.matches) {
            this.currentMedia = {name: 'laptop', size: this.preDefinedQueries['laptop']};
            if(curMedia.name != this.currentMedia.name) this.emitEvent();
            console.log("We are on a laptop Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['desktop']);
        if(mediaQuery.matches) {
            this.currentMedia = {name: 'desktop', size: this.preDefinedQueries['desktop']};
            if(curMedia.name != this.currentMedia.name) this.emitEvent();
            console.log("We are on a desktop Size");
            return;
        }
    }

    getMediaQuery():  Media {
        return (this.currentMedia);
    };
    isDesktop(): Boolean {
        return (this.currentMedia.name == 'desktop');
    };
    isLaptop(): Boolean {
        return (this.currentMedia.name == 'laptop');
    };
    isTablet(): Boolean {
        return (this.currentMedia.name == 'tablet');
    };
    isPhone(): Boolean {
        return (this.currentMedia.name == 'phone');
    };
    updateMedia() : void {
        this.getMediaSize();
    }
}

export class Media {
    size: string;
    name: string;
}