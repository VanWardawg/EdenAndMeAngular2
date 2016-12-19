import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';
import { GalleryComponent } from './gallery-component/gallery.component';
import { ContactComponent } from './contact-component/contact.component';
import { ServicesComponent } from './services-component/services.component';
import { AboutMeComponent } from './aboutme-component/aboutme.component';

import { ImageService } from './image-service/image.service';
import { MediaService } from './media-service/media.service';
import { GridService } from './grid-service/grid.service';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule,
        routing],
    declarations: [AppComponent, HeaderComponent, GalleryComponent, ContactComponent,
    ServicesComponent, AboutMeComponent, FooterComponent],
    bootstrap: [AppComponent],
    providers: [
        ImageService,
        MediaService,
        GridService
    ],
})
export class AppModule { }