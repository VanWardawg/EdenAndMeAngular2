import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { MediaService } from '../media-service/media.service';

@Component({
    moduleId: module.id,
    selector: 'emp-aboutme',
    templateUrl: 'aboutme.component.html',
    styleUrls:['aboutme.component.css'],
})
export class AboutMeComponent implements OnInit {
    constructor(private imageService: ImageService,
    private mediaService: MediaService) { }

    ngOnInit() { }
}