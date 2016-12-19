import { Injectable, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
@Injectable()
export class GridService {
    currentSize : CellSize;
    rows: number;
    columns: number;
    size: Size;

    private calculateSize() : void {
        this.currentSize = new CellSize();
        this.currentSize.x = this.size.x / this.rows;
        this.currentSize.y = this.size.y / this.columns;
    }

    updateGrid(size: Size) : CellSize {
        this.size = size;
        this.calculateSize();
        return this.currentSize;
    }

    createGrid(rows: number, columns: number, size: Size): CellSize {
        this.rows = rows;
        this.columns = columns;
        this.size = size;
        this.calculateSize();
        return this.currentSize;
    }
}

export class Size {
    x: number;
    y: number;
}

export class CellSize {
    x: number;
    y: number;
    rowSizeClass(rows: number) : string {
        return "width: " + this.x * rows + "px;";
    }
    columnSizeClass(columns: number) : string {
        return "height: " + this.y * columns + "px;";
    }
}