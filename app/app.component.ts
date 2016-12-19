import { Component, HostListener } from '@angular/core';
import { MediaService } from './media-service/media.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    constructor(private mediaService : MediaService) {}
    @HostListener('window:resize', ['$event'])
    onResize(event) : void {
        this.mediaService.updateMedia();
    }
}