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
var GridService = (function () {
    function GridService() {
    }
    GridService.prototype.calculateSize = function () {
        this.currentSize = new CellSize();
        this.currentSize.x = this.size.x / this.rows;
        this.currentSize.y = this.size.y / this.columns;
    };
    GridService.prototype.updateGrid = function (size) {
        this.size = size;
        this.calculateSize();
        return this.currentSize;
    };
    GridService.prototype.createGrid = function (rows, columns, size) {
        this.rows = rows;
        this.columns = columns;
        this.size = size;
        this.calculateSize();
        return this.currentSize;
    };
    GridService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
var Size = (function () {
    function Size() {
    }
    return Size;
}());
exports.Size = Size;
var CellSize = (function () {
    function CellSize() {
    }
    CellSize.prototype.rowSizeClass = function (rows) {
        return "width: " + this.x * rows + "px;";
    };
    CellSize.prototype.columnSizeClass = function (columns) {
        return "height: " + this.y * columns + "px;";
    };
    return CellSize;
}());
exports.CellSize = CellSize;
