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
var grid_service_1 = require('../grid-service/grid.service');
var GalleryComponent = (function () {
    function GalleryComponent(gridService) {
        this.gridService = gridService;
    }
    GalleryComponent.prototype.ngAfterViewInit = function () {
        var size = new grid_service_1.Size();
        size.x = this.container.element.nativeElement.clientWidth;
        size.y = this.container.element.nativeElement.clientHeight;
        this.cellSize = this.gridService.createGrid(6, 12, size);
        console.log(this.cellSize);
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], GalleryComponent.prototype, "container", void 0);
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'emh-gallery',
            templateUrl: 'app/gallery-component/gallery.component.html',
            styleUrls: ['app/gallery-component/gallery.component.css']
        }), 
        __metadata('design:paramtypes', [grid_service_1.GridService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map