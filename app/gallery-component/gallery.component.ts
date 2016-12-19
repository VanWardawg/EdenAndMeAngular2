import { Component, ViewContainerRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

import { GridService, CellSize, Size } from '../grid-service/grid.service';
@Component({
    selector: 'emh-gallery',
    templateUrl: 'app/gallery-component/gallery.component.html',
    styleUrls: ['app/gallery-component/gallery.component.css']
})

export class GalleryComponent implements AfterViewInit  {
    cellSize : CellSize;
    @ViewChild('container', {read: ViewContainerRef}) private container;
    constructor(private gridService: GridService) {

    }
    
    ngAfterViewInit() {
        let size = new Size();
        size.x = this.container.element.nativeElement.clientWidth;
        size.y =  this.container.element.nativeElement.clientHeight;
        this.cellSize = this.gridService.createGrid(6, 12, size);
        console.log(this.cellSize);
    }
}