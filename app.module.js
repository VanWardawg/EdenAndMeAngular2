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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header-component/header.component');
var footer_component_1 = require('./footer-component/footer.component');
var gallery_component_1 = require('./gallery-component/gallery.component');
var contact_component_1 = require('./contact-component/contact.component');
var services_component_1 = require('./services-component/services.component');
var aboutme_component_1 = require('./aboutme-component/aboutme.component');
var image_service_1 = require('./image-service/image.service');
var media_service_1 = require('./media-service/media.service');
var grid_service_1 = require('./grid-service/grid.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, gallery_component_1.GalleryComponent, contact_component_1.ContactComponent,
                services_component_1.ServicesComponent, aboutme_component_1.AboutMeComponent, footer_component_1.FooterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                image_service_1.ImageService,
                media_service_1.MediaService,
                grid_service_1.GridService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
