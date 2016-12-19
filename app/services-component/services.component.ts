import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { MediaService } from '../media-service/media.service';

@Component({
    moduleId: module.id,
    selector: 'emp-services',
    templateUrl: 'services.component.html',
    styleUrls:['services.component.css'],
})
export class ServicesComponent implements OnInit {
    constructor(private imageService: ImageService,
    private mediaService: MediaService) { }

    ngOnInit() { }
}