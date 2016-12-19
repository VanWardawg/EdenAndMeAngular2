import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { MediaService } from '../media-service/media.service';

@Component({
    moduleId: module.id,
    selector: 'emp-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
    constructor(private imageService: ImageService,
    private mediaService: MediaService) { }

    ngOnInit() { }
}