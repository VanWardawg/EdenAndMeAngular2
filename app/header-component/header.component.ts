import { Component, OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router } from '@angular/router';
import {Image} from '../image-service/images'
import { ImageService } from '../image-service/image.service';
import { MediaService, Media } from '../media-service/media.service';

@Component({
    selector: 'emp-header',
    templateUrl: 'app/header-component/header.component.html',
    styleUrls:['app/header-component/header.component.css'],
     animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0px)'})),
        transition('void => in', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
        ]),
        transition('in => void', [
        animate(200, style({transform: 'translateX(-100%)'}))
        ]),
    ]),
    trigger('fadeInOut', [
        state('fade', style({opacity: '.3'})),
        transition('void => fade', [
        style({opacity: '0'}),
        animate(300)
        ]),
        transition('fade => void', [
        animate(300, style({opacity: '0'}))
        ])
    ])
  ]
})

export class HeaderComponent implements OnInit {
    
    logoImage : Image;
    links: Link[];
    media: Boolean;
    showFlyoutMenu : Boolean;
    state: string;
    fadeState: string;

    constructor(private router: Router,
    private imageService: ImageService,
    private mediaService : MediaService) { }

    ngOnInit() : void {
        this.mediaService.mediaChanged.subscribe(media=>this.processMediaChange(media));
        this.imageService.getLogoImage().then(image => this.setImage(image));
        this.links = [
            {route:"/gallery", name: "gallery", style:"gallery-underline"},
            {route:"/services", name: "services & prices", style:"services-underline"},
            {route:"/aboutme", name: "about me", style:"about-me-underline"},
            {route:"/contact", name: "contact", style:"contact-underline"}
        ]
    }

    goToGallery() : void {
        let link = ['/gallery'];
        this.router.navigate(link);
    }

    processMediaChange(media: Media): void {
        if(this.showFlyoutMenu && (this.mediaService.isDesktop() || this.mediaService.isLaptop())) {
            this.toggleMenu();
        }
        console.log("received new media", media);
    }

    toggleMenu() : void {
        this.showFlyoutMenu = !this.showFlyoutMenu;
        this.state = this.showFlyoutMenu ? 'in' : null;
        this.fadeState = this.showFlyoutMenu ? 'fade' : null;
    }

    setImage(img : Image) : void {
        this.logoImage = img;
    }
}

class Link {
    route: string;
    name: string;
    style:string;
}