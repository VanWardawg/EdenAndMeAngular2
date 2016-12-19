"use strict";
var router_1 = require('@angular/router');
var gallery_component_1 = require('./gallery-component/gallery.component');
var contact_component_1 = require('./contact-component/contact.component');
var services_component_1 = require('./services-component/services.component');
var aboutme_component_1 = require('./aboutme-component/aboutme.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent
    },
    {
        path: 'aboutme',
        component: aboutme_component_1.AboutMeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
