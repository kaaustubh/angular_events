import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.compnent';
import {EventDetailsComponent} from './events/details/event-details.component';
import {CreateEventComponent} from './events/create/create-event.component';
import {Component} from '@angular/core';
import {Error404Component} from './events/errors/404.component';
import {EventRouteActivator} from './events/details/event-route-activator';
import {EventsListResolverService} from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
