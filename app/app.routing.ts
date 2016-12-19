import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent }      from './gallery-component/gallery.component';
import { ContactComponent }      from './contact-component/contact.component';
import { ServicesComponent }     from './services-component/services.component';
import { AboutMeComponent }      from './aboutme-component/aboutme.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'aboutme',
        component: AboutMeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);