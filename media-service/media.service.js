"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MediaService = (function () {
    function MediaService() {
        this.preDefinedQueries = {
            'phone': '(max-width:480px)',
            'tablet': '(min-width:481px) and (max-width:979px)',
            'laptop': '(min-width:980px) and (max-width:1279px)',
            'desktop': '(min-width:1280px)'
        };
        this.getMediaSize();
        this.mediaChanged = new core_1.EventEmitter();
    }
    MediaService.prototype.emitEvent = function () {
        if (this.mediaChanged == null) {
            return;
        }
        this.mediaChanged.emit(this.currentMedia);
    };
    MediaService.prototype.getMediaSize = function () {
        var curMedia = this.currentMedia || { name: 'desktop', size: this.preDefinedQueries['desktop'] };
        var mediaQuery;
        mediaQuery = window.matchMedia(this.preDefinedQueries['phone']);
        if (mediaQuery.matches) {
            this.currentMedia = { name: 'phone', size: this.preDefinedQueries['phone'] };
            if (curMedia.name != this.currentMedia.name)
                this.emitEvent();
            console.log("We are on a Phone Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['tablet']);
        if (mediaQuery.matches) {
            this.currentMedia = { name: 'tablet', size: this.preDefinedQueries['tablet'] };
            if (curMedia.name != this.currentMedia.name)
                this.emitEvent();
            console.log("We are on a tablet Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['laptop']);
        if (mediaQuery.matches) {
            this.currentMedia = { name: 'laptop', size: this.preDefinedQueries['laptop'] };
            if (curMedia.name != this.currentMedia.name)
                this.emitEvent();
            console.log("We are on a laptop Size");
            return;
        }
        mediaQuery = window.matchMedia(this.preDefinedQueries['desktop']);
        if (mediaQuery.matches) {
            this.currentMedia = { name: 'desktop', size: this.preDefinedQueries['desktop'] };
            if (curMedia.name != this.currentMedia.name)
                this.emitEvent();
            console.log("We are on a desktop Size");
            return;
        }
    };
    MediaService.prototype.getMediaQuery = function () {
        return (this.currentMedia);
    };
    ;
    MediaService.prototype.isDesktop = function () {
        return (this.currentMedia.name == 'desktop');
    };
    ;
    MediaService.prototype.isLaptop = function () {
        return (this.currentMedia.name == 'laptop');
    };
    ;
    MediaService.prototype.isTablet = function () {
        return (this.currentMedia.name == 'tablet');
    };
    ;
    MediaService.prototype.isPhone = function () {
        return (this.currentMedia.name == 'phone');
    };
    ;
    MediaService.prototype.updateMedia = function () {
        this.getMediaSize();
    };
    MediaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MediaService);
    return MediaService;
}());
exports.MediaService = MediaService;
var Media = (function () {
    function Media() {
    }
    return Media;
}());
exports.Media = Media;
