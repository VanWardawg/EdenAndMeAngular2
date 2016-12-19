import { Injectable } from '@angular/core';
import { Image,IMAGES } from './images';

@Injectable()
export class ImageService {
    getLogoImage():  Promise<Image> {
        return Promise.resolve(IMAGES[0]);
    };
}