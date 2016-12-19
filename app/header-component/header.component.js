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
var router_1 = require('@angular/router');
var image_service_1 = require('../image-service/image.service');
var media_service_1 = require('../media-service/media.service');
var HeaderComponent = (function () {
    function HeaderComponent(router, imageService, mediaService) {
        this.router = router;
        this.imageService = imageService;
        this.mediaService = mediaService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mediaService.mediaChanged.subscribe(function (media) { return _this.processMediaChange(media); });
        this.imageService.getLogoImage().then(function (image) { return _this.setImage(image); });
        this.links = [
            { route: "/gallery", name: "gallery", style: "gallery-underline" },
            { route: "/services", name: "services & prices", style: "services-underline" },
            { route: "/aboutme", name: "about me", style: "about-me-underline" },
            { route: "/contact", name: "contact", style: "contact-underline" }
        ];
    };
    HeaderComponent.prototype.goToGallery = function () {
        var link = ['/gallery'];
        this.router.navigate(link);
    };
    HeaderComponent.prototype.processMediaChange = function (media) {
        if (this.showFlyoutMenu && (this.mediaService.isDesktop() || this.mediaService.isLaptop())) {
            this.toggleMenu();
        }
        console.log("received new media", media);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.showFlyoutMenu = !this.showFlyoutMenu;
        this.state = this.showFlyoutMenu ? 'in' : null;
        this.fadeState = this.showFlyoutMenu ? 'fade' : null;
    };
    HeaderComponent.prototype.setImage = function (img) {
        this.logoImage = img;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'emp-header',
            templateUrl: 'app/header-component/header.component.html',
            styleUrls: ['app/header-component/header.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0px)' })),
                    core_1.transition('void => in', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(200)
                    ]),
                    core_1.transition('in => void', [
                        core_1.animate(200, core_1.style({ transform: 'translateX(-100%)' }))
                    ]),
                ]),
                core_1.trigger('fadeInOut', [
                    core_1.state('fade', core_1.style({ opacity: '.3' })),
                    core_1.transition('void => fade', [
                        core_1.style({ opacity: '0' }),
                        core_1.animate(300)
                    ]),
                    core_1.transition('fade => void', [
                        core_1.animate(300, core_1.style({ opacity: '0' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, image_service_1.ImageService, media_service_1.MediaService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
var Link = (function () {
    function Link() {
    }
    return Link;
}());
//# sourceMappingURL=header.component.js.map