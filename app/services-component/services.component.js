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
var image_service_1 = require('../image-service/image.service');
var media_service_1 = require('../media-service/media.service');
var ServicesComponent = (function () {
    function ServicesComponent(imageService, mediaService) {
        this.imageService = imageService;
        this.mediaService = mediaService;
    }
    ServicesComponent.prototype.ngOnInit = function () { };
    ServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'emp-services',
            templateUrl: 'services.component.html',
            styleUrls: ['services.component.css'],
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService, media_service_1.MediaService])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map